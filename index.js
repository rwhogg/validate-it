/**
 * @module main
 */

const camelcase = require("camelcase")

const validators = {}

/**
 * Validates the file at the given path with the given MIME type.
 * @param {string} text Content of the file to validate.
 * @param {string} fullType MIME type of the file.
 * @returns {boolean} `true` if the file is valid; `false` otherwise.
 */
async function validate(text, fullType) {
    const subtype = fullType.split("/")[1]
    const type = subtype.startsWith("x-") ? subtype.split("x-")[1] : subtype
    const renamedType = camelcase(type)

    try
    {
        validators[renamedType] = validators[renamedType] ||
            require(`${__dirname}/validators/${renamedType}.validator.js`)
    }
    catch(e)
    {
        throw new Error(`No validator exists for MIME type ${fullType}. If this is a commonly-used file type, please` +
                        " consider submitting a PR to https://github.com/rwhogg/validate-it to add support for it.")
    }
    const validator = validators[renamedType]
    if(typeof validator !== "function")
    {
        throw new Error(`Bad validator for MIME type ${fullType}`)
    }

    return await validator(text)
}

module.exports = validate
