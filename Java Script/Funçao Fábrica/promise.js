// Promises

// function rand(min,max){
//     return Math.floor(Math.random()* (max-min) + min)
// }

// function esperaAi(msg, tempo, callback){
//     setTimeout(
//         ()=>{
//             console.log(msg)
//             if(callback){callback()}
//         }, tempo
//     )}
// esperaAi("Frase 1", rand(1000, 3000), function(){
//     esperaAi("Frase 2", rand(1000, 3000), function(){
//         esperaAi("Frase 3", rand(1000, 3000))
//     })})


// function rand(min,max){
//     return Math.floor(Math.random()* (max-min) + min)
// }

// function esperaAi(msg, tempo){
//     return new Promise((resolve,reject)=>{
//         if(typeof msg !== 'string') {reject("Valor rejeitado")}
//         setTimeout(
//             ()=>{
//                 resolve(msg)
//             }, tempo
//         )
//     })
// }

// esperaAi("Frase 01", rand(1000, 3000))
// .then(
//     (resposta) => {
//         console.log(resposta)
//         return esperaAi(222222, rand(1000, 3000))
//     }
// ).then(resposta=>{
//     console.log(resposta)
// })
// .catch(erro=>{
//     console.log(erro)
// })



function rand(min,max){
    return Math.floor(Math.random()* (max-min) + min)
}

function esperaAi(msg, tempo){
    return new Promise((resolve,reject)=>{
        if(typeof msg !== 'string') {reject("Valor rejeitado")}
        setTimeout(
            ()=>{
                resolve(msg)
            }, tempo
        )
    })
}

async function baixarPagina(){
    const emCache = false

    if(emCache){
        return await Promise.resolve('Página em Cache')
    }
    else{
        return esperaAi("Baixei a página", 3000)
    }
}

baixarPagina().then(resposta=>{
    console.log(resposta)
})
.catch(erro=>{
    console.log(erro)
})