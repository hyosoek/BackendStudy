const express =require("express")
//자바스크립트 끼리 파일 임포트가 됩니다.
const app = express()
app.use(express.json())
//원래 object는 통신으로 사용 못함 - string으로 변환해서, 다시 parsing해서 object를 자동으로

//여기 3줄은 고정

//////////////

//프론트엔드의 요청에 따라, 웹서버가 어떤 행동을 할지 모든 내용을 적으면 됨.
//app.get으로만 시작함, 첫 변수는 경로(절대경로), 두번째는 받을 것(req)과 보내줄 것(res)
//__dirname은 절대 경로 호출 명령어.
//API를 적어주는 공간 = API라는 뜻 = API란, 외부에서 내 프로그램을 사용하게 하는 메뉴얼
app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

// {
//     "id" : "~~~",
//     "pw" : "~~~"
// }
app.post("/",(req,res)=>{
})
app.put("/",(req,res)=>{
})
app.delete("/",(req,res)=>{
})
//express에서 text editor 처럼 지원해주는 의미적인 거지 기능적인 게 없습니다. get의 여러개 만들어둔거

//api를 접근하고 호출하게 해주는 경로입니다.
app.get("/login",(req,res)=>{
    //req를 object(json)로 받아옴
    const {id,pw} = req.body; // 오브젝트는 reference입니다.

    const result = { // 반환하기 위해선 역시나 object
        "success" : false,
        "message" : ""
    }

    if(id = "stageus" && pw == "1234"){
        result.success = true
        result.message = "로그인 성공"
    } else{
        result.message = "아이디 혹은 비밀번호가 올바르지 않습니다."
    }

    res.send(result)
})

//////////////

app.listen(8000,() => {
    console.log("8000번 포트에서 Web Server 실행")
})
