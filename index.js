//1.callback

// setTimeout(()=>{
//     console.log("first")
// },1000)

// let number = 10

// setTimeout(()=>{
//     number += 10
//     console.log(number)
//     setTimeout(()=>{
//         number += 10
//         console.log(number)  
//     },1000) //call back
// },1000)

// setTimeout(()=>{
//     number += 10
//     console.log(number)  
// },1000)

// console.log(number)









//2. promise(Es6에서 제공하며, 처리와 함수 모두 제공)

const func1 = (number) => {

    let result = 0
    result = number * number

    return result
}

const num1 = func1(10)
console.log(num1)

const func2 = (number) =>{
    const promise = new Promise((resolve, reject)=>{
        let result = 0
        try{
            result = number * number
        } catch (err){
            reject(err.message)
        }
        resolve(result)
    })//결국 callback이랑 구조는 같습니다

    return promise
}

// const num2 = func2(10)
// console.log(num2)

func2(10)
.then((data)=>{ // 비동기함수의 resolve값이 data로 들어옴
    console.log(data)
    return func1(data)
})
.then((data2)=>{
    console.log(data2)
})
.catch((err) =>{
    console.log(err)
})
//2개를 분리해서 쓰면 쓰는 순서 상관없이 처리되는 순서이므로 100이 2번 처리됩니다. 왜? 첫번째 비동기 결과를 받아오지 못해서

console.log("hello, world") // 가장 먼저 나올 듯
//오늘 우리가 사용할 fetch는 이 방식으로 합니다







//3. Async-Await

window.onload = async() =>{
    const data = await func1(10) //얘는 이제부터 동기 함수 - 이론이 좀 다름
    //함수 전체에 대해서 비동기 함수하는게 좋겠다. = 중복 코드 제거할 때 좋겠다. 

    //await = 동기로 만들어줍니다.
    console.log(data)
    const data2 = await func(data)
    console.log(data2)
}
