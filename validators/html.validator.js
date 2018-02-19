const execa = require("execa").sync
const vnu = require("vnu-jar")

function validate(text) {
    try
    {
        execa("java", ["-jar", vnu, "-"], {input: text})
        return true
    }
    catch(e)
    {
        return false
    }
}

module.exports = validate