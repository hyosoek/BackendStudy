const router = require("express").Router()
const path = require("path")

router.get("/mainPage",(req,res)=>{
    //res.sendFile(__dirname + "../index.html") //path error 발생
    res.sendFile(path.join(__dirname, "../index.html")) //..을 계산해줌
})

module.exports = router