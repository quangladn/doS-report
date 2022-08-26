const express = require("express")
const router = express.Router()

ErrorPost = []

router.get("/post/raw",(rep,res) => {
  res.send(ErrorPost)
})

router.post("/post/create", (rep,res) => {
  ErrorPost.push(rep.body)
  res.send(`
<h1>thank!</h1>
<h3>thank you to report error!<3</h3>
<a href="/"><button>home</button></a>`)
})

module.exports = router
