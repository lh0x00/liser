// @flow

import yargs from 'yargs'
import path from 'path'
import fs from 'fs'
import glob from 'glob'
import shell from 'shelljs'

const cli = '$(PWD)/node_modules/.bin/tachyons'
const tmpDir = 'tmp'
const modulesDir = 'modules'
const prefix = 'liser.'

const { name, clean = true, _: modules } = yargs.options({
  name: {
    type: 'string',
  },
  clean: {
    type: 'boolean',
  },
}).argv

const contentReader = (f: string, c: boolean): string => {
  const content = fs.readFileSync(f, 'utf8')
  if (c) fs.unlinkSync(f)
  return content
}

const contentWriter = (f: string, d: string): any => {
  fs.writeFileSync(f, d, 'utf-8')
}

glob(`src/modules/+(_signature|${modules.join('|')}).css`, {}, (er, files) => {
  const originalList = []
  const minList = []
  files.map((file) => {
    const originalFile = `${tmpDir}/${prefix}${path.basename(file)}`
    const minFile = `${tmpDir}/${prefix}${path
      .basename(file)
      .replace('.css', '.min.css')}`
    minList.push(minFile)
    originalList.push(originalFile)
    return [
      shell.exec(`${cli} ${file} > ${originalFile}`),
      shell.exec(`${cli} ${file} -m > ${minFile}`),
    ]
  })
  const originalContent = originalList
    .map(f => contentReader(f, !!clean))
    .join(' ')
  const minContent = minList.map(f => contentReader(f, !!clean)).join(' ')
  contentWriter(`${modulesDir}/${prefix}${name}.css`, originalContent)
  contentWriter(`${modulesDir}/${prefix}${name}.min.css`, minContent)
})
