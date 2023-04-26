import { rps, rpsls } from "./lib/rpsls.js"
import minimist from "minimist"

const cliArgs = minimist(process.argv.slice(2))
var port = 5000

if(!(cliArgs.port == undefined)) {
    port = Number(cliArgs.port)
    console.log(port)
    if (isNaN(port)) {
        port = 5000
    }
}

console.log(rps('paper'))