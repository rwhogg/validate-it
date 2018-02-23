const execa = require("execa").sync
const glob = require("glob")

glob("testfiles/good*", function(error, files) {
    files.forEach(file => {
        try {
            execa("./validate-it", [file])
        }
        catch(e) {
            console.error(`Failed: ${file}`)
            process.exit(1)
        }
    })
})

glob("testfiles/bad*", function(error, files) {
    files.forEach(file => {
        try {
            execa("./validate-it", [file])
            console.error(`Failed: ${file}`)
            process.exit(1)
        }
        catch(e) {
            // eslint:ignore
        }
    })
})
