/**
 * @module CSSValidator
 */

const parser = require("css")

/**
 * Validates CSS files.
 * @param {string} text CSS text to validate.
 * @returns {boolean} `true` if valid; `false` otherwise.
 */
function validate(text) {
    const result = parser.parse(text, {silent: true})
    if(!result.stylesheet)
    {
        return false
    }
    if(!result.stylesheet.parsingErrors)
    {
        return true
    }
    return result.stylesheet.parsingErrors.length === 0
}

module.exports = validate
