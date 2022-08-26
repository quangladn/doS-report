import express from "express"
const router = express.Router()

let data = [
]

router.get("/database", (rep,res) => {
    res.send(data)
})

router.post("/database", (rep,res) => {
    console.log(rep.body)
    data.push(rep.body)
    res.send(`<p style="font-family:'Roboto'">susscess add word<br/>thank you update dictionary !</p><br/><a href="/home"><button style="font-family:'Roboto'">home</button></a>`)
})

router.get("/database/:word", (rep,res) => {
    const { word } = rep.params

    const foundData = data.find((data_) => data_.word === word)
    
    res.send(foundData)

})

export default router
