import { resolve } from 'node:path'
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'

import metacademyData from '@/data/metacademy.json'
import type { Models } from '@/lib/types'

const OUTPUT_ROOT = process.env.METACADEMY_FORMATTED_DATA_ROOT ?? ''
const generateReadMeFile = () => {}
const writeModelToFile = (source: { [k: string]: any; model: `graph.${Models}`; pk: string }) => {
  const model = source.model.split('.')[1]
  const dir_name = resolve(OUTPUT_ROOT, model)
  const fileName = `${model}.${source.pk}.json`
  if (!existsSync(dir_name)) {
    mkdirSync(dir_name)
  }
  writeFileSync(`${dir_name}/${fileName}`, JSON.stringify(source))
}

metacademyData.map(model => writeModelToFile(model))
export {}
