const router = require("express").Router()
//모든 패키지가 아닌, api 패키지만 가져옵니다.
//router.use 안해도 됨. server.js에서 등록하면 모든 하위 js에 적용
//express에 대해 켜지는 것이기 때문


//login은 post로
router.post("/login",(req,res)=>{ // 호출 이름
    //req를 object(json)로 받아옴
    const {id,pw} = req.body; // 오브젝트는 reference입니다.

    const result = { // 반환하기 위해선 역시나 object
        "success" : false,
        "message" : ""
    }

    if(id == "stageus" && pw == "1234"){
        result.success = true
        result.message = "로그인 성공"
    } else{
        result.message = "아이디 혹은 비밀번호가 올바르지 않습니다."
    }

    res.send(result)
})

// router.get("/:data/:data2",(req,res)=>{

//     //query-string (...:8000/account?data= 123) // api 이름은 / 하나임
//     //const data = req.query.data

//     //qeury-parameter (...:8000/account/ 123 /456)
//     const data = req.params.data
//     const data2 = req.params.data2

//     const result ={
//         "success" : true,
//         "message" : "",
//         "data": {
//             "id":"stageus",
//             "pw":"1234",
//             "name":"최민석"
//         }
//     }

//     res.send(result)
// })

router.get("/",(req,res)=>{

    const result ={
        "success" : true,
        "message" : "",
        "data": {
            "id":"stageus",
            "pw":"1234",
            "name":"최민석"
        }
    }

    res.send(result)
})

module.exports = router