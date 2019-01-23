/**
 * @module PHPValidator
 */

const execa = require("execa").sync

/**
 * Validates PHP files. The specific version it conforms to depends on the
 * value of `php --version` on your machine.
 * @param {string} text Text of the file to validate.
 * @returns {boolean} `true` if the file is valid PHP; `false` otherwise.
 */
async function validate(text) {
    try {
        execa("php", [], {input: text})
        return true
    }
    catch(e) {
        return false
    }
}

module.exports = validate
