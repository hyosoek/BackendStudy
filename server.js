const express = require("express")
//자바스크립트 끼리 파일 임포트가 됩니다.
const app = express()
app.use(express.json())
//원래 object는 통신으로 사용 못함 - string으로 변환해서, 다시 parsing해서 object를 자동으로

//여기 3줄은 고정

//프론트엔드의 요청에 따라, 웹서버가 어떤 행동을 할지 모든 내용을 적으면 됨.
//app.get으로만 시작함, 첫 변수는 경로(절대경로), 두번째는 받을 것(req)과 보내줄 것(res)
//__dirname은 절대 경로 호출 명령어.
//API를 적어주는 공간 = API라는 뜻 = API란, 외부에서 내 프로그램을 사용하게 하는 메뉴얼


//2주차
const pagesApi = require("./router/pages")
app.use("/",pagesApi) 
// => /는 api 이름의 preset(깊이 1의 이름을 정해줌)

const accountApi = require("./router/account")
app.use("/account", accountApi)
// => /account는 api 이름

//express에서 text editor 처럼 지원해주는 의미적인 거지 기능적인 게 없습니다. get의 여러개 만들어둔거
//api를 접근하고 호출하게 해주는 경로입니다.

app.listen(8000,() => {
    console.log("8000번 포트에서 Web Server 실행")
})
