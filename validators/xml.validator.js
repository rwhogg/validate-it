/**
 * @module XMLValidator
 */

const libxmljs = require("libxmljs")

/**
 * Validates XML files (for syntax validity, not any sort of schema conformance necessarily).
 * @param {string} text XML text to validate.
 * @returns {boolean} `true` if valid; `false` otherwise.
 */
function validate(text) {
    try {
        const result = libxmljs.parseXmlString(text)
        return !(result.errors && Array.isArray(result.errors) && result.errors.length > 0)
    }
    catch(e) {
        return false
    }
}

module.exports = validate
