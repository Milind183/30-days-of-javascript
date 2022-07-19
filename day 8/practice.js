// a = 'javascript'
// b = 10

// function letsLearnScope(){
//     console.log(a,b)
//     if(true){
//         console.log(a,b)
//     }
// }
// console.log(a,b)



// let a='java'
// let b=513
// function letsLearnScope(){
//     console.log(a,b)
//         if(true){
//             z=0
//             let a='python'
//             let b=102
//             console.log(a,b)
//         }
//         console.log(a,b)
// }
// letsLearnScope()
// console.log(a,b,z)




// let a='adas'
// let b=30
// function letsLearnScope(){
//     console.log(a,b)
//     let value = false
//     if(true){
//         let a='dklsanl'
//         let b= 20
//         let c=63
//         let d=103
//         value = !value
//         console.log(a,b,c,d,value)
//     }
// }
// letsLearnScope()
// console.log(a,b)


// function letsLearnScope(){
//     const g=25
//     console.log(g)
// }



// const p={}



// const rec={l: 20,w: 30}
// console.log(rec)

// const person={
//     firstname:'Milind',
//     lastname:'Rathod',
//     age:22 ,
//     coutry:'India',
//     Skills:['css','html','javascript'],
//     isMarried : false,
//     getname: function(){
//         return `${this.firstname} ${this.lastname}`
//     },
//     'phonenumer':'9822475013',
//     address: {
//         street: 'Heitamienkatu 16',
//         pobox: 2002,
//         city: 'Helsinki'
//     }

// }
// m=[]
// m.push(person.Skills.length)
// console.log(m)

//console.log(person)
// person.title='student'
// person.Skills.push('doing nothing')
// person.Skills.push('hehe')
// person.getPersonInfo=function(){
//     let skillsWithoutLastSkill =this.Skills.splice(0,this.Skills.length-1).join(',')
//     let lastSkill =this.Skills.splice(this.Skills.length-1)[0]
//     let Skills =`${skillsWithoutLastSkill} ,and ${lastSkill}`
//     fullName = this.getname()
//     let statement =`${fullName} is a ${this.title}.\nHe lives in ${this.coutry}.\nHe teches ${Skills}`
//     return statement
// }

// // console.log(person)
// // console.log(person.getPersonInfo())
// const copyPerson = Object.assign({},person)
// // console.log(copyPerson)

// const keys=Object.keys(copyPerson)
// console.log(keys)
// const address = Object.keys(copyPerson.address)
// console.log(address)

// const lad=Object.values(person)
// console.log(lad)

// const entriyes=Object.entries(person)
// console.log(entriyes)


// console.log(person.hasOwnProperty('Skills') )


















