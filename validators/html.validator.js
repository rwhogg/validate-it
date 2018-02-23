/**
 * @module HTMLValidator
 */

const execa = require("execa").sync
const vnu = require("vnu-jar")

/**
 * Validates HTML files according to HTML5 rules.
 * @param {string} text HTML text to validate.
 * @returns {boolean} `true` if valid; `false` otherwise.
 */
function validate(text) {
    try {
        execa("java", ["-jar", vnu, "-"], {input: text})
        return true
    }
    catch(e) {
        return false
    }
}

module.exports = validate
