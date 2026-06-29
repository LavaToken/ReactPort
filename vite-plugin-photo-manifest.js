import { readFileSync, readdirSync, writeFileSync, existsSync, mkdirSync } from 'node:fs'
import { join, extname, basename } from 'node:path'
import { imageSize } from 'image-size'

const PHOTO_DIR = 'public/photography'
const MANIFEST_NAME = 'photo-manifest.json'
const IMAGE_EXTENSIONS = new Set([
  '.jpg', '.jpeg', '.png', '.gif', '.webp', '.avif', '.bmp', '.tif', '.tiff',
])

/**
 * Sort order:
 *  - files whose base name is purely numeric sort ascending by that number
 *    (so 10 comes after 9, not after 1)
 *  - everything else is appended afterwards, sorted alphabetically
 */
function sortPhotoFiles(files) {
  const numeric = []
  const other = []

  for (const file of files) {
    const name = basename(file, extname(file))
    if (/^\d+$/.test(name)) {
      numeric.push(file)
    } else {
      other.push(file)
    }
  }

  numeric.sort((a, b) => Number(basename(a, extname(a))) - Number(basename(b, extname(b))))
  other.sort((a, b) => a.localeCompare(b, undefined, { numeric: false }))

  return [...numeric, ...other]
}

function buildManifest(root) {
  const dir = join(root, PHOTO_DIR)

  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true })
  }

  const files = readdirSync(dir).filter((file) =>
    IMAGE_EXTENSIONS.has(extname(file).toLowerCase()),
  )

  const photos = []
  for (const file of sortPhotoFiles(files)) {
    try {
      const buffer = readFileSync(join(dir, file))
      const { width, height, orientation } = imageSize(buffer)
      if (!width || !height) {
        console.warn(`[photo-manifest] skipping ${file}: could not read dimensions`)
        continue
      }
      // EXIF orientations 5-8 rotate the image 90°, so the browser displays it
      // with width/height swapped relative to the stored pixels. Record the
      // displayed dimensions so the justified layout keeps the true aspect ratio.
      const rotated = orientation >= 5 && orientation <= 8
      photos.push({
        src: `photography/${file}`,
        width: rotated ? height : width,
        height: rotated ? width : height,
      })
    } catch (err) {
      console.warn(`[photo-manifest] skipping ${file}: ${err.message}`)
    }
  }

  writeFileSync(join(dir, MANIFEST_NAME), `${JSON.stringify(photos, null, 2)}\n`)
  return photos.length
}

export default function photoManifest() {
  let root = process.cwd()

  return {
    name: 'photo-manifest',

    configResolved(config) {
      root = config.root
    },

    buildStart() {
      const count = buildManifest(root)
      console.log(`[photo-manifest] generated manifest with ${count} photo(s)`)
    },

    configureServer(server) {
      const dir = join(root, PHOTO_DIR)
      const regenerate = (file) => {
        // ignore writes to the manifest itself to avoid an update loop
        if (basename(file) === MANIFEST_NAME) return
        const count = buildManifest(root)
        console.log(`[photo-manifest] regenerated manifest with ${count} photo(s)`)
        server.ws.send({ type: 'full-reload' })
      }

      server.watcher.add(dir)
      server.watcher.on('add', regenerate)
      server.watcher.on('unlink', regenerate)
    },
  }
}
