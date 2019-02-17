/**
 * @module SCSSValidator
 */

const sass = require("node-sass") // dart-sass is still in beta

/**
 * Validates SCSS (or SASS) files.
 * @param {string} text Text of the SCSS file to validate.
 * @param {boolean} [indentedSyntax] If `true`, use the indented syntax. Otherwise, use CSS-superset syntax.
 * @returns {boolean} `true` if the file is valid SCSS/SASS; `false` otherwise.
 */
function validate(text, indentedSyntax) {
    try
    {
        sass.renderSync({
            data: text,
            indentedSyntax,
        })
        return true
    }
    catch(e)
    {
        console.error(e)
        return false
    }

}

module.exports = validate
