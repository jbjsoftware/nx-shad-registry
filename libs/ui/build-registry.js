import fs from 'fs'
import path from 'path'
import { createJiti } from 'jiti'
import { fileURLToPath } from 'url'

// Create jiti instance for TypeScript support
const __filename = fileURLToPath(import.meta.url)
const jiti = createJiti(__filename)

const generateCustomCSS = (item) => {
  if (item.type !== 'registry:theme' && item.type !== 'registry:style') {
    return null
  }

  if (!item.cssVars) {
    return null
  }

  let css = ''
  const themeName = item.name.replace('-theme', '').replace('-style', '')

  // Generate CSS for light mode with data-theme selector
  if (item.cssVars.light) {
    css += `[data-theme="${themeName}"] {\n`
    Object.entries(item.cssVars.light).forEach(([key, value]) => {
      css += `  --${key}: ${value};\n`
    })
    css += '}\n\n'
  }

  // Generate CSS for dark mode with data-theme selector
  if (item.cssVars.dark) {
    css += `[data-theme="${themeName}"].dark {\n`
    Object.entries(item.cssVars.dark).forEach(([key, value]) => {
      css += `  --${key}: ${value};\n`
    })
    css += '}\n'
  }

  return css
}

const buildRegistry = async () => {
  try {
    // Import the registry using jiti (for TypeScript support)
    const { registry } = jiti('./src/registry/index.ts')
    
    // Create output directory
    const outputDir = '../../apps/docs/public/r'
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true })
    }

    // Generate individual JSON files for each registry item
    registry.forEach(item => {
      const outputPath = path.join(outputDir, `${item.name}.json`)
      const registryItem = {
        "$schema": "https://ui.shadcn.com/schema/registry-item.json",
        ...item
      }
      
      fs.writeFileSync(outputPath, JSON.stringify(registryItem, null, 2))
      console.log(`Generated: ${outputPath}`)

      // Generate custom CSS file for themes
      const customCSS = generateCustomCSS(item)
      if (customCSS) {
        const cssOutputPath = path.join(outputDir, `${item.name}-custom.css`)
        fs.writeFileSync(cssOutputPath, customCSS)
        console.log(`Generated CSS: ${cssOutputPath}`)
      }
    })

    // Also generate the main registry JSON
    const mainRegistryPath = './registry.json'
    const mainRegistry = {
      "$schema": "https://ui.shadcn.com/schema/registry.json",
      "name": "acme",
      "homepage": "https://acme.com",
      "items": registry
    }
    
    fs.writeFileSync(mainRegistryPath, JSON.stringify(mainRegistry, null, 2))
    console.log(`Updated: ${mainRegistryPath}`)
    
    // Copy registry.json to public/r folder
    const publicRegistryPath = path.join(outputDir, 'registry.json')
    fs.writeFileSync(publicRegistryPath, JSON.stringify(mainRegistry, null, 2))
    console.log(`Copied registry to: ${publicRegistryPath}`)
    
    console.log('✔ Registry build complete!')
  } catch (error) {
    console.error('Registry build failed:', error)
    process.exit(1)
  }
}

buildRegistry() 