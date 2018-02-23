/**
 * @module JSONValidator
 */

/**
 * Validates JSON files.
 * @param {string} text Text of the JSON file to validate.
 * @returns {boolean} `true` if the file is valid JSON; `false` otherwise.
 */
function validate(text)
{
    try
    {
        JSON.parse(text);
        return true;
    }
    catch(e)
    {
        return false;
    }
}

module.exports = validate;
