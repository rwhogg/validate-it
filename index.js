/**
 * @module main
 */

const validators = {}
const NotReadyError = require("./NotReadyError.js")

/**
 * Validates the file at the given path with the given MIME type.
 * @param {string} text Content of the file to validate.
 * @param {string} fullType MIME type of the file.
 * @returns {boolean} `true` if the file is valid; `false` otherwise.
 */
async function validate(text, fullType) {
    const subtype = fullType.split("/")[1]
    const type = subtype.startsWith("x-") ? subtype.split("x-")[1] : subtype

    try {
        validators[type] = validators[type] || require(`${__dirname}/validators/${type}.validator.js`)
    }
    catch(e) {
        throw new Error(`No validator exists for MIME type ${fullType}. If this is a commonly-used file type, please` +
                        " consider submitting a PR to https://github.com/rwhogg/validate-it to add support for it.")
    }
    const validator = validators[type]
    if(typeof validator !== "function") {
        throw new Error(`Bad validator for MIME type ${fullType}`)
    }

    // check if this validator is ready to run on this machine (you might eg. be missing a dependency)
    try {
        (typeof validator.ready === "function") && validator.ready()
    }
    catch(e) {
        throw new NotReadyError(`Validator for MIME type ${fullType} cannot run on this machine. Reason: ${e.message}`)
    }

    return await validator(text)
}

module.exports = validate
