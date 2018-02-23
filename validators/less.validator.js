/**
 * @module LESSValidator
 */

const less = require("less")

/**
 * Validates LESS files.
 * @param {string} text Text of the file to validate.
 * @returns {boolean} `true` if the file is valid LESS; `false` otherwise.
 */
async function validate(text) {
    try {
        await less.parse(text)
        return true
    }
    catch(e) {
        return false
    }
}

module.exports = validate
