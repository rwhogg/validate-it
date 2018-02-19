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
