// Note: this doesn't support JSX, E4X, or any similar kinds of extensions.
// JSX might be worth supporting in the future, but anything else probably not

function validate(text) {
    const acorn = require("acorn")
    let valid = false
    const options = {
        ecmaVersion: 9,
        allowHashBang: true,
    }
    // JS code can be parsed either as a script or a module. Try both
    return ["script", "module"].map(sourceType => {
        try
        {
            options.sourceType = sourceType
            acorn.parse(text, options)
            return true
        }
        catch(e)
        {
            return false
        }
    }).includes(true)
}

module.exports = validate
