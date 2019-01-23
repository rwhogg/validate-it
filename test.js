const execa = require("execa").sync
const glob = require("glob")

const NOT_READY_ERROR = 3

glob("testfiles/good*", function(error, files) {
    files.forEach(file => {
        try {
            execa("./validate-it", [file])
        }
        catch(e) {
            if(e.code === NOT_READY_ERROR) {
                console.error(`TEST COULD NOT RUN: ${file}`)
                return
            }

            console.error(`Failed: ${file}`)
            console.error(`Message: ${e.message}`)
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
            if(e.code === NOT_READY_ERROR) {
                console.error(`TEST COULD NOT RUN: ${file}`)
            }
        }
    })
})
