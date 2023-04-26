
const minimist = require("minimist")
const cliArgs = minimist(process.argv.slice(2))
var port = 5555

if(!(cliArgs.port == undefined)) {
    port = Number(cliArgs.port)
    console.log(port)
    if (isNaN(port)) {
        port = 5555
    }
}

console.log(port)