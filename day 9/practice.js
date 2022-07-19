// x = (n)=>{
//     return n+1
// }
// z = (x,n) =>{
//     return x(n)*n
// }



// c=a=>{
//     x = (b)=>{
//         z = (c) =>{
//           return  a*b*c
//         }
//         return z
//     }
//     return x
// }
// console.log(c(2)(2)(2))



// number = [1,2,3,4,5,6]
// sumArr=arr=>{
//     sum=0
//     s=function(element){
//         sum+=element
//     }
//     arr.forEach(s)
//     return sum
// }
// console.log(sumArr(number))



// na=()=>{
//     console.log('Miind')
// }
// setInterval(na,5000)
// setTimeout(na,2000)



// sum=0
// num=[1,2,3,6,4,.31,4.9]
// num.forEach(element => {
//     sum+=element  
//     console.log(sum)
// });


// const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
// countries.forEach((element) => (console.log(element.toUpperCase())))


// x=[4,6,6,3,9,]
// numSquare = x.map((num)=> num*num)
// console.log(numSquare)


// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya',
//   ]

// upp=countries.map((x)=>x.toUpperCase().slice(0,3))
// console.log(upp)

// land = countries.filter((cou)=>cou.includes('land'))
// console.log(land)

// endByia=countries.filter((x)=>x.endsWith('ia'))
// console.log(endByia)

// five=countries.filter((x)=>x.length===5)
// console.log(five)



// const scores = [
//     { name: 'Asabeneh', score: 95 },
//      { name: 'Lidiya', score: 98 },
//     { name: 'Mathias', score: 80 },
//     { name: 'Elias', score: 50 },
//     { name: 'Martha', score: 85 },
//     { name: 'John', score: 100 },
// ]

// gre=scores.filter((score)=>score.name.includes('ia'))
// console.log(gre)


// num=[1,2,3,4,6,5,6,7,6]
// sum=num.reduce((acc,cur)=> acc+cur,0)
// console.log(sum)

// nums=num.find((age) => age > 4 )
// console.log(nums)

// const scores = [
//   { name: 'Asabeneh', score: 95 },
//   { name: 'Mathias', score: 80 },
//   { name: 'Elias', score: 50 },
//   { name: 'Martha', score: 85 },
//   { name: 'John', score: 100 },
// ]
// const score = scores.find((user) => user.score > 80)
// console.log(score)



