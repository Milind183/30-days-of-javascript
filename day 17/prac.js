// const doSomething = call => {
//     setTimeout(() => {
//         const skill= ['html','ccs','javascript']
//         call(skill)
//     }, 2000);
// }
// call = (err,result) => {
//     if(err){
//         return console.log(err);
//     }
//     return console.log(result);
// }

// doSomething(call)


// const promise = new Promise((resolve,reject) => {
//     resolve('success')
//     reject('fail')
// })

// console.log(promise);


// const doPromis = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         const skill = ['javascript']
//         if (skill.length>2){
//             resolve(skill)
//         }
//         else{
//             reject('its okay bro')
//         }
//     }, 2000);
// })

// doPromis
//     .then(result =>{
//         console.log(result);
//     })
// .catch(error => console.log(error))



const url = 'https://restcountries.com/v2/all'
fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
.catch(error => console.error(error))
