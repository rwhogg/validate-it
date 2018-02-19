const sass = require("node-sass"); // dart-sass is still in beta

/*
    This module is used by the Sass validator too.
    When used directly by validate-it, indentedSyntax will be falsy and hence will use the CSS syntax.
    The Sass validator explicitly sets it to true, because node-sass expects the CSS syntax by default when not given
    a filename.
*/
function validate(text, indentedSyntax)
{
    try
    {
        sass.renderSync({
            data: text,
            indentedSyntax
        });
        return true;
    }
    catch(e)
    {
        console.error(e);
        return false;
    }

}

module.exports = validate;
