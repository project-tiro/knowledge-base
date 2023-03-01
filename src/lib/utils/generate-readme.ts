import { resolve } from 'node:path'
import { readFileSync, writeFileSync, readdirSync } from 'node:fs'
import { Models } from '@/lib/types'

const ENTRY_ROOT = process.env.METACADEMY_FORMATTED_DATA_ROOT ?? ''

const generateReadme = (models: string[], model: Models) => {
  const template = `
# Metacademy: Model.${model}

##Overview
###Total Nodes: ${models.length}
---

## Nodes
${models.map(model => `\n- ${model.split('.')[1]}: [Go to model](./${model})\n`)}
 `
  writeFileSync(`${ENTRY_ROOT}/${model}/README.md`, template)
}

const modelDirs = readdirSync(ENTRY_ROOT, { encoding: 'utf8', withFileTypes: true })
const models = modelDirs.map(modelDir => {
  const modelType = modelDir.name as Models
  const models = readdirSync(`${ENTRY_ROOT}/${modelDir.name}`, { encoding: 'utf8' })
  generateReadme(models, modelType)
})

export {}
