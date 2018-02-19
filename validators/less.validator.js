const less = require("less");

async function validate(text)
{
    try
    {
        await less.parse(text);
        return true;
    }
    catch(e)
    {
        return false;
    }
}

module.exports = validate;
