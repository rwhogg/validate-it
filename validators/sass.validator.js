const validator = require(`${__dirname}/scss.validator.js`);

function validate(text)
{
    // explicitly set indentedSyntax to true, otherwise it assumes CSS-style syntax
    return validator(text, true);
}

module.exports = validate;
