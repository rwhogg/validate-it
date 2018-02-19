#!/usr/bin/env node
const fs = require("fs")
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
    if(valid)
    {
        console.log(`File ${path} is valid!`)
    }
    else
    {
        result = result || 1
        console.error(`File ${path} is not valid!`)
    }
})

if(result == 0)
{
    console.log("All files are valid!")
}
process.exit(result)

function validate(path, type) {
    validators[type] = validators[type] || require(`${__dirname}/validators/${type}.validator.js`)
    const validator = validators[type]
    const text = fs.readFileSync(path, {encoding: "utf-8"})
    return validator(text)
}
