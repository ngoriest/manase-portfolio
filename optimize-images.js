#!/usr/bin/env node
/**
 * Image optimization script for manase-portfolio
 * 
 * Run once before deploying:
 *   node optimize-images.js
 * 
 * Requires: sharp
 *   npm install --save-dev sharp
 */

import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const INPUT  = path.join(__dirname, 'public', 'manase-photo.jpg');
const OUTPUT_DIR = path.join(__dirname, 'public');

async function optimizeImages() {
  console.log('🖼️  Optimizing images...\n');

  // 1. WebP versions (smaller, modern format - ~30% smaller than JPEG)
  await sharp(INPUT)
    .resize(384, 384, { fit: 'cover', position: 'top' })
    .webp({ quality: 82 })
    .toFile(path.join(OUTPUT_DIR, 'manase-photo.webp'));
  console.log('✅  manase-photo.webp (384×384)');

  await sharp(INPUT)
    .resize(320, 320, { fit: 'cover', position: 'top' })
    .webp({ quality: 80 })
    .toFile(path.join(OUTPUT_DIR, 'manase-photo-sm.webp'));
  console.log('✅  manase-photo-sm.webp (320×320)');

  // 2. Optimised JPEG fallback (for Safari < 14 and older browsers)
  await sharp(INPUT)
    .resize(384, 384, { fit: 'cover', position: 'top' })
    .jpeg({ quality: 80, progressive: true, mozjpeg: true })
    .toFile(path.join(OUTPUT_DIR, 'manase-photo-opt.jpg'));
  console.log('✅  manase-photo-opt.jpg (384×384, progressive)');

  console.log('\n🎉  Done! Update Hero.jsx to use the new files:');
  console.log(`
  <picture>
    <source
      srcSet="/manase-photo-sm.webp 320w, /manase-photo.webp 384w"
      sizes="(max-width: 640px) 320px, 384px"
      type="image/webp"
    />
    <img
      src="/manase-photo-opt.jpg"
      alt="Manase Kimutai"
      width="384"
      height="384"
      loading="eager"
      fetchpriority="high"
      decoding="async"
      className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-3xl object-cover border border-white/10 shadow-2xl"
      style={{ objectPosition: '50% 20%' }}
    />
  </picture>
  `);
}

optimizeImages().catch(console.error);