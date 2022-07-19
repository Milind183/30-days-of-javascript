// const dog={
//     name:'doggo',
//     legs:4,
//     color:'black',
//     age:5,
//     bark : function(){
//         return `woof woof`
//     }
// }
// console.log(dog)
// const val=Object.values(dog)
// console.log(val)
// dog.breed ='something'
// dog.getDogInfo=function(){
//     console.log(`Name of the dog is ${this.name}.\nColor of the dog is ${this.color}` )
// }
// dog.getDogInfo()



// const users = {
//     Alex: {
//       email: 'alex@alex.com',
//       skills: ['HTML', 'CSS', 'JavaScript'],
//       age: 20,
//       isLoggedIn: false,
//       points: 30
//     },
//     Asab: {
//       email: 'asab@asab.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
//       age: 25,
//       isLoggedIn: false,
//       points: 50
//     },
//     Brook: {
//       email: 'daniel@daniel.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//       age: 30,
//       isLoggedIn: true,
//       points: 50
//     },
//     Daniel: {
//       email: 'daniel@alex.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     },
//     John: {
//       email: 'john@john.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//       age: 20,
//       isLoggedIn: true,
//       points: 50
//     },
//     Thomas: {
//       email: 'thomas@thomas.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     },
//     Paul: {
//       email: 'paul@paul.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     }
// }

// function isLo(){
//   for(var entry of Object.entries(users)){
//       nam = entry[0]
//       islog = entry[1].isLoggedIn
//     if(islog==true){
//       console.log(nam,islog) 
//     }
//   }
  
//   for(var entry of Object.entries(users)){
//     nam = entry[0]
//     point=entry[1].points
//     if(point>=50){
//       console.log(nam,point)
//     }
//   } 
// }
// isLo()

// function Merndev(){
//   for(var entrye of Object.entries(users)){
//     nam=entrye[0]
//     mern=entrye[1].skills
//     if(mern.includes('MongoDB', 'Express', 'React', 'Node')==true){
//       console.log(`WE have ${nam} As MERNStack dev`)
//     }
//   }
  
// }
// Merndev()

// const usersz=Object.assign({},users)

// usersz.Milind = {}

// console.log(usersz)


// keyy= Object.keys(users)
// vaal=Object.values(users)

// console.log(keyy,vaal)


// function country(countryname , capital ,population,language){
//   countryy={
//     CountryName:countryname,
//     Capital:capital,
//     Population:population,
//     Language:language
//   }
//   return countryy
// }

// console.log(users)

// for(ent of Object.entries(users)){
// countryname=prompt(`countryname`)
// capita=prompt(`capital`)
// population=prompt('population')
// language= prompt(`language`)
//   users[`${ent[0]}`].country = country(countryname,capita,population,language)
// }



// personAccount={
//   firstName: firstname,
//   lastName: lastname ,
//   incomes: inCome ,
//   expenses: exp,
//   totalIncome: function(){},
//   totalExpense: function(){},
//   accountInfo: function(){},
//   addIncome:function(){},
//   addExpense:function(){},
//   accoutBalance:function(){},
// }


const users = [
  {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt:'08/01/2020 9:00 AM',
      isLoggedIn: false
  },
  {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt:'08/01/2020 9:30 AM',
      isLoggedIn: true
  },
  {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt:'08/01/2020 9:45 AM',
      isLoggedIn: true
  },
  {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt:'08/01/2020 9:50 AM',
      isLoggedIn: false
  },
  {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt:'08/01/2020 10:00 AM',
      isLoggedIn: false
  }
  ];

  const products = [
{
  _id: 'eedfcf',
  name: 'mobile phone',
  description: 'Huawei Honor',
  price: 200,
  ratings: [
    { userId: 'fg12cy', rate: 5 },
    { userId: 'zwf8md', rate: 4.5 }
  ],
  likes: []
},
{
  _id: 'aegfal',
  name: 'Laptop',
  description: 'MacPro: System Darwin',
  price: 2500,
  ratings: [],
  likes: ['fg12cy']
},
{
  _id: 'hedfcg',
  name: 'TV',
  description: 'Smart TV:Procaster',
  price: 400,
  ratings: [{ userId: 'fg12cy', rate: 5 }],
  likes: ['fg12cy']
}
]




// let z;
// // x=alert(`Do you want to like the product `)
// x=true
// if(x==true){
//   z=products[0].likes
//   z.push({adsdsa: 'ILikeIt'})
// }
// console.log(products)

// f=Object.values(products)
// for(i=0;i<f.length;i++){
// if(f[i].name=='mobile phone'){
//   zz=f[i]
//   console.log(`ok\n`,zz)
// }
// }
// console.log(f[0].name)





// z=0
// function avgRating(){
//   for(i=0;i<products.length;i++){
//     x=Object.values(products[0].ratings)
//     c=Object.keys(products[0].ratings)
//   }
//   for(i=0;i<x.length;i++){
//     z=z+x[i].rate/c.length
//   }
//   console.log(z)
// }
// avgRating()






// let isAva;
// let usea='ds'
// let n=0
// function rateProduct(p){
//   for(i=0;i<products.length;i++){
//   if(products[i].name==p){
//     zz=products[i]
//     products[i].ratings={userId:`${usea}`,rating: n }
//     isAva=true
//   }
//   }
//   if(isAva!=true){
//     console.log(`product is not available `)
//   }
// console.log(products)
// }
// rateProduct('TV')



                                    ///SIGN IN  FUNCTION ///




// function signIn(userx){
// for(i=0;i<users.length;i++){
//   if(users[i].username==userx){
//     var k=true
//     u=users[i]
//     if(u.isLoggedIn==true){      
//       console.log('Already logged in bro '
//       )
//     }
//     else{
//       u.isLoggedIn=true
//       console.log(`Successfull login \n`,users)
//     }
//   }
// }
// if(k!=true){
//   console.log(`user does not exits `)
// }
// }
// signIn('Asab')







///     SIGN    UP    FUNCTION         ///



// let z;
// function signUp(y){
// x=Object.values(users)
// for(i=0;i<x.length;i++){
//   if(x[i].username==y){
//     z=true
//     console.log(`user exist`)
//   }
// }
// if(z!=true){
//   users.push({a:'a',b:'b'})
//   console.log(`Adding user`)
// }
// }
// signUp('Milind')
// console.log(users)

