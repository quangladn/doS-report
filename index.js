const express = require("express")
const app = express()
const http = require("http")
const server = http.createServer(app)
const port = process.env.PORT || 3000
const { Server } = require("socket.io")
const io = new Server(server)
const postError = require("./api/postError.js")
const bodyparse = require("body-parser")

app.use(bodyparse.json())
app.use(express.urlencoded())
app.use("/", postError)
app.get("/", (rep,res) => {
  res.sendFile(__dirname + "/index.html")
})
app.get("/create", (rep,res) => {
  res.sendFile(__dirname + "/report.html")
})
app.get("/show", (rep,res) => {
  res.sendFile(__dirname + "/show.html")
})

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(port, () => console.log(`server running on port ${port}`))
