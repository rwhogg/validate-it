/**
 * @module JSValidator
 */

// Note: this doesn't support JSX, E4X, or any similar kinds of extensions.
// JSX might be worth supporting in the future, but anything else probably not

/**
 * Validates JavaScript files according to the latest standard
 * (ES 9 proposal as of this writing)
 * @param {string} text Text of the file to validate.
 * @returns {boolean} `true` if file is valid, `false` otherwise.
 */
function validate(text)
{
    const acorn = require("acorn");
    const options = {
        ecmaVersion: 9,
        allowHashBang: true
    };
    // JS code can be parsed either as a script or a module. Try both
    return ["script", "module"].map(sourceType =>
    {
        try
        {
            options.sourceType = sourceType;
            acorn.parse(text, options);
            return true;
        }
        catch(e)
        {
            return false;
        }
    }).includes(true);
}

module.exports = validate;
