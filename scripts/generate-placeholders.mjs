// Generates placeholder "film still" artwork as SVGs under public/images.
// These exist only so the site has real imagery to ship with. Replace any
// path referenced in src/data/projects.ts or src/data/site.ts with a real
// photo/poster (same filename or a new one) and the layout holds unchanged.
//
// Run with: node scripts/generate-placeholders.mjs

import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT_ROOT = join(__dirname, '..', 'public', 'images')

/** @param {string} str */
function hash(str) {
  let h = 2166136261
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return Math.abs(h)
}

function mulberry32(seed) {
  let a = seed
  return function () {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const PALETTES = {
  films: { from: '#0b0d10', to: '#16212b', ring: 'rgba(201,197,188,0.20)' },
  documentaries: { from: '#11100d', to: '#2e2518', ring: 'rgba(214,186,140,0.20)' },
  'short-films': { from: '#0a0a0d', to: '#1b1430', ring: 'rgba(196,186,224,0.18)' },
  cinematography: { from: '#100b06', to: '#3a2512', ring: 'rgba(194,137,74,0.32)' },
  'music-videos': { from: '#0e0810', to: '#2e1024', ring: 'rgba(214,150,190,0.20)' },
  other: { from: '#0c0c0c', to: '#272727', ring: 'rgba(200,200,200,0.16)' },
  brand: { from: '#0a0a0a', to: '#1a1a1a', ring: 'rgba(194,137,74,0.24)' },
}

function apertureRing(rng, w, h, ring) {
  const side = rng() > 0.5 ? 1 : -1
  const cx = w * (side > 0 ? 0.86 : 0.14)
  const cy = h * (0.22 + rng() * 0.5)
  const r = Math.min(w, h) * (0.3 + rng() * 0.16)
  const blades = 8
  const rot = rng() * 360
  let ticks = ''
  for (let i = 0; i < blades; i++) {
    const a = (rot + (360 / blades) * i) * (Math.PI / 180)
    const x1 = cx + Math.cos(a) * r
    const y1 = cy + Math.sin(a) * r
    const x2 = cx + Math.cos(a) * (r + Math.min(w, h) * 0.035)
    const y2 = cy + Math.sin(a) * (r + Math.min(w, h) * 0.035)
    ticks += `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="${ring}" stroke-width="1.5" stroke-linecap="round" />`
  }
  return `
    <circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="${r.toFixed(1)}" fill="none" stroke="${ring}" stroke-width="1.25" />
    <circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="${(r * 0.62).toFixed(1)}" fill="none" stroke="${ring}" stroke-width="1" />
    ${ticks}
  `
}

/** Escapes text for safe use in both XML attribute values and text nodes. */
function xmlEscape(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function svgTemplate({ w, h, palette, caption, seed }) {
  const rng = mulberry32(seed)
  const { from, to, ring } = PALETTES[palette] ?? PALETTES.brand
  const angle = 115 + rng() * 40
  const noiseSeed = seed % 999
  const ring1 = apertureRing(rng, w, h, ring)
  const safeCaption = xmlEscape(caption)
  const safeCaptionUpper = xmlEscape(caption.toUpperCase())

  return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${safeCaption}">
  <defs>
    <linearGradient id="bg" gradientTransform="rotate(${angle.toFixed(1)} 0.5 0.5)">
      <stop offset="0%" stop-color="${from}" />
      <stop offset="100%" stop-color="${to}" />
    </linearGradient>
    <radialGradient id="vig" cx="50%" cy="42%" r="75%">
      <stop offset="55%" stop-color="black" stop-opacity="0" />
      <stop offset="100%" stop-color="black" stop-opacity="0.6" />
    </radialGradient>
    <filter id="grain">
      <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="${noiseSeed}" stitchTiles="stitch" result="noise" />
      <feColorMatrix in="noise" type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.05 0" />
    </filter>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg)" />
  <g opacity="0.9">${ring1}</g>
  <rect width="${w}" height="${h}" fill="url(#vig)" />
  <rect width="${w}" height="${h}" filter="url(#grain)" />
  <rect x="20" y="20" width="${w - 40}" height="${h - 40}" fill="none" stroke="rgba(243,239,232,0.14)" stroke-width="1" />
  <text x="40" y="${h - 36}" font-family="Helvetica, Arial, sans-serif" font-size="${Math.max(12, Math.round(w * 0.011))}" letter-spacing="2" fill="rgba(243,239,232,0.55)">${safeCaptionUpper}</text>
</svg>`
}

function write(relPath, svg) {
  const full = join(OUT_ROOT, relPath)
  mkdirSync(dirname(full), { recursive: true })
  writeFileSync(full, svg, 'utf8')
  console.log('wrote', relPath)
}

function project(slug, title, palette) {
  write(
    `projects/${slug}/poster.svg`,
    svgTemplate({ w: 800, h: 1200, palette, caption: `${title} — Poster`, seed: hash(slug + 'poster') })
  )
  write(
    `projects/${slug}/hero.svg`,
    svgTemplate({ w: 1920, h: 1080, palette, caption: `${title} — Hero`, seed: hash(slug + 'hero') })
  )
  for (let i = 1; i <= 4; i++) {
    write(
      `projects/${slug}/still-${i}.svg`,
      svgTemplate({
        w: 1600,
        h: 1000,
        palette,
        caption: `${title} — Still 0${i}`,
        seed: hash(slug + 'still' + i),
      })
    )
  }
}

project('midnight-ledger', 'Midnight Ledger', 'short-films')
project('season-of-ash', 'Season of Ash', 'documentaries')
project('terra-nova', 'Terra Nova', 'films')
project('glass-horizon', 'Glass Horizon', 'cinematography')
project('static-and-silence', 'Static & Silence', 'music-videos')
project('field-notes', 'Field Notes', 'other')

write('home/hero.svg', svgTemplate({ w: 1920, h: 1080, palette: 'brand', caption: 'Selected Works', seed: hash('home-hero') }))
write('home/showreel.svg', svgTemplate({ w: 1920, h: 1080, palette: 'brand', caption: 'Showreel — Reel 01', seed: hash('showreel') }))
write('about/portrait.svg', svgTemplate({ w: 960, h: 1200, palette: 'other', caption: 'Portrait', seed: hash('about-portrait') }))

console.log('Done.')
