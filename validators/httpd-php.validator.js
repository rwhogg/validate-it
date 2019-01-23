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

/**
 * Confirms that we have PHP available and in the PATH.
 * @returns {undefined}
 */
validate.ready = function() {
    const which = require("which").sync
    which("php")
}

module.exports = validate
