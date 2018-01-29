// @flow

import path from 'path'
import fs from 'fs'
import glob from 'glob'

const filePath = 'modules.md'
const fileContent = `
# modules

these are already supported modules
`

try {
  glob('src/modules/!(_*).css', {}, (er, files) => {
    const fileList = files.map((file) => {
      const moduleName = path.basename(file).replace('.css', '')
      return `- [-] [${moduleName}](https://github.com/lamhieu-vk/liser/blob/master/docs/${moduleName}.md), view source [here](https://github.com/lamhieu-vk/liser/tree/master/src/modules/${moduleName})`
    })
    fs.writeFileSync(filePath, `${fileContent}${fileList.join('\n')}`, 'utf-8')
  })
  console.log('checkout modules success!')
} catch (e) {
  console.log('checkout modules fail!')
}
