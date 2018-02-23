/**
 * @module SASSValidator
 */

const validator = require(`${__dirname}/scss.validator.js`);

/**
 * Validates SASS files.
 * @param {string} text Text of the file to validate.
 * @returns {boolean} `true` if the file is valid SASS; `false` otherwise.
 */
function validate(text)
{
    // explicitly set indentedSyntax to true, otherwise it assumes CSS-style syntax
    return validator(text, true);
}

module.exports = validate;
