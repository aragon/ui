#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const oco = require('opencolor')
const converter = require('opencolor-converter')

const chunks = []
process.stdin.on('data', chunk => chunks.push(chunk))
process.stdin.on('end', () => ocojson(Buffer.concat(chunks)))
process.stdin.resume()

const ocojson = async content => {
  try {
    const tree = oco.parse(content)
    const json = await converter.json.exporter(tree)
    console.log(json)
  } catch (err) {
    console.error('Error trying to convert:')
    console.error(err)
    process.exit(1)
  }
}
