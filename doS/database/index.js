import express from 'express'
const app = express()
import bodyParser from 'body-parser'
import path from 'path'
import dataRoutes from "./routes/data.js"
const port = process.env.PORT || 3000
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyParser.json())
app.use(express.urlencoded())

app.use("/data", dataRoutes)

app.get("/home", (rep,res) => {
    res.sendFile(path.join(__dirname, '/home.html'));
})

app.get("/view", (rep,res) => {
    res.sendFile(path.join(__dirname, '/view.html'));
})
app.get("/add", (rep,res) => {
    res.sendFile(path.join(__dirname, '/createData.html'));
})

app.listen(port)

console.log('server running on port: ' + port)

