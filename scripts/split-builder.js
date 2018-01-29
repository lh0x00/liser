// @flow

import path from 'path'
import glob from 'glob'
import shell from 'shelljs'

const cli = '$(PWD)/node_modules/.bin/tachyons'
const dir = 'build'
const prefix = 'liser.'

try {
  glob('src/modules/!(_*).css', {}, (er, files) => {
    files.map(file => [
      shell.exec(`${cli} ${file} > ${dir}/${prefix}${path.basename(file)}`),
      shell.exec(
        `${cli} ${file} -m > ${dir}/${prefix}${path
          .basename(file)
          .replace('.css', '.min.css')}`,
      ),
    ])
  })
  console.log('split build success!')
} catch (e) {
  console.log('split build fail!')
}
