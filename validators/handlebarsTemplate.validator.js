/**
 * @module HandlebarsValidator
 */

const parser = require("handlebars")

/**
 * Validates Handlebars templates.
 * @param {string} text Handlebars template to validate.
 * @returns {boolean} `true` if valid; `false` otherwise.
 */
function validate(text) {
    try {
        parser.precompile(text)
        return true
    }
    catch(e) {
        return false
    }
}

module.exports = validate
