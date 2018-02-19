const parser = require("css");

function validate(text)
{
    const result = parser.parse(text, {silent: true});
    if(!result.stylesheet)
    {
        return false;
    }
    if(!result.stylesheet.parsingErrors)
    {
        return true;
    }
    return result.stylesheet.parsingErrors.length === 0;
}

module.exports = validate;
