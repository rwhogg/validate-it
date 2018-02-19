#!/usr/bin/env node
const acorn = require("acorn")
const meow = require("meow")
const mime = require("mime-types")

const cli = meow(`
    Usage
        $ validate-it <path> <path>...
`)

const validators = {};

let result = 0;
cli.input.forEach(path => {
    const fullType = mime.lookup(path)
    if(!fullType)
    {
        result = 2
        console.error(`File ${path} is of invalid or unknown type!`)
    }
    const type = fullType.split("/")[1]
    
    const valid = validate(path, type)
    if(!valid)
    {
        result = result || 1
        console.error(`File ${path} is not valid!`)

    }
})
process.exit(result)

function validate(path, type) {
    validators[type] = validators[type] || require(`${__dir}/${type}.validator.js`)
    const validator = validators[type]
    return validator(path)
}
