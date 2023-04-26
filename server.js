import { rps, rpsls } from "./lib/rpsls.js"
import minimist from "minimist"
import express from "express"

const cliArgs = minimist(process.argv.slice(2))
const app = express()
var port = 5000

if(!(cliArgs.port == undefined)) {
    port = Number(cliArgs.port)
    if (isNaN(port)) {
        port = 5000
    }
}

app.use(express.json())
app.use(express.urlencoded({extended: true}))