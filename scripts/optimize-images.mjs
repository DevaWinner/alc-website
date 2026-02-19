#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const SRC_DIR = path.join(process.cwd(), "src");
const IMG_DIR = path.join(process.cwd(), "public", "img");
const MAX_EDGE = 1400;
const QUALITY = 72;

const IMAGE_REF_PATTERN = /\/img\/([A-Za-z0-9_.-]+\.(?:jpe?g|png))/gi;

function walkFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkFiles(full));
      continue;
    }

    if (/\.(ts|tsx)$/.test(entry.name)) {
      files.push(full);
    }
  }

  return files;
}

function formatKB(bytes) {
  return `${(bytes / 1024).toFixed(1)}KB`;
}

async function main() {
  if (!fs.existsSync(IMG_DIR)) {
    throw new Error(`Image directory not found: ${IMG_DIR}`);
  }

  const sourceFiles = walkFiles(SRC_DIR);
  const referenced = new Set();

  for (const file of sourceFiles) {
    const content = fs.readFileSync(file, "utf8");
    const matches = content.matchAll(IMAGE_REF_PATTERN);
    for (const match of matches) {
      referenced.add(match[1]);
    }
  }

  if (referenced.size === 0) {
    console.log("No /img references found in src.");
    return;
  }

  let converted = 0;
  let skipped = 0;
  let missing = 0;
  let inputTotal = 0;
  let outputTotal = 0;

  for (const filename of [...referenced].sort()) {
    const inputPath = path.join(IMG_DIR, filename);
    if (!fs.existsSync(inputPath)) {
      console.warn(`Missing source image: public/img/${filename}`);
      missing += 1;
      continue;
    }

    const outputName = filename.replace(/\.(jpe?g|png)$/i, ".webp");
    const outputPath = path.join(IMG_DIR, outputName);

    if (!/\.(jpe?g|png)$/i.test(filename)) {
      skipped += 1;
      continue;
    }

    const beforeSize = fs.statSync(inputPath).size;
    await sharp(inputPath)
      .rotate()
      .resize({
        width: MAX_EDGE,
        height: MAX_EDGE,
        fit: "inside",
        withoutEnlargement: true
      })
      .webp({
        quality: QUALITY,
        effort: 6
      })
      .toFile(outputPath);

    const afterSize = fs.statSync(outputPath).size;
    inputTotal += beforeSize;
    outputTotal += afterSize;
    converted += 1;
    console.log(
      `Converted ${filename} -> ${outputName} (${formatKB(beforeSize)} -> ${formatKB(afterSize)})`
    );
  }

  const saved = inputTotal - outputTotal;
  const pct = inputTotal > 0 ? ((saved / inputTotal) * 100).toFixed(1) : "0.0";

  console.log("");
  console.log(`Converted: ${converted}`);
  console.log(`Skipped: ${skipped}`);
  console.log(`Missing: ${missing}`);
  console.log(`Total before: ${formatKB(inputTotal)}`);
  console.log(`Total after:  ${formatKB(outputTotal)}`);
  console.log(`Saved:        ${formatKB(saved)} (${pct}%)`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
