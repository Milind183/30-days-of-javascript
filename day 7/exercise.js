// function fullName(){
//     firstName='Milind '
//     lastName='Rathod'
//     fullname=firstName+lastName
//     return fullname
// }
// console.log(fullName())


// function fullName(f,l){
//     fullname=f+' '+l
//     return fullname
// }

// console.log(fullName('milind' , 'rathod'))


// function addNumbers(n1,n2){
//     sum=n1+n2
//     return sum    
// }
// console.log(addNumbers(3,9))


// function aor(l,w){
//     area=l*w
//     return area
// }
// console.log(aor(6,3))


// function por(l,w){
//     peri=2*(l+w)
//     return peri
// }

// console.log(por(6,9))


// function vorp(l,w,h){
//     volume=l*w*h
//     return volume
// }
// console.log(vorp(3,6,9))


// function ctf(oC){
//     oF = (oC*9/5) + 32
//     return oF
// }
// console.log(ctf(0))



// function BMI(weight,height){
//     mi=weight/(height*height)
    
//     if(mi<18.5){
//         console.log(`under weight`)
//     }
//     else if(mi<25){
//         console.log(`normal weight`)
//     }
//     else if(mi<30){
//         console.log(`over weight`)
//     }
//     else{
//         console.log(`obese`)
//     }
    
//     return mi
// }
// console.log(BMI(54,1.6))


// function checkSeason(month){
//     month=month.toLowerCase()
//     if(month=='january'||month=='february'||month=='december'){
//         console.log(`This is Winter `)
//     }
//     else if(month=='september'||month=='october'||month=='november'){
//         console.log(`This is Autumn`)
//     }
//     else if(month=='march'||month=='april'||month=='may'){
//         console.log(`This is Spring`)
//     }
//     else if(month=='june'||month=='july'||month=='august'){
//         console.log(`This is Summer`)
//     }
//     else{
//         console.log(`please enter a month`)
//     }
// }
// (checkSeason('january'))

// function max(){
//     h=0;
//     for(i=0;i<arguments.length;i++){
//         if(arguments[i]>h){
//             h=arguments[i]
//         }
//     }
//     return h;
// }

// console.log(max(0,10,5))
// console.log(max(0,-10,-2))


// printArray = array => console.log(array)
// printArray('milind')


// function showDateTime(){
//     console.log(new Date(2020,00,08, 04,08))
// }
// showDateTime()


// function swapValues(x,y){
//     z=x;
//     x=y;
//     y=z;
//     zz=[x,y]
//     return zz
// }
// console.log(swapValues(3,6))


// newAry=[]
// function revers(Array){
//     for(i=Array.length;i>0;i--){
//     (newAry.push(Array[i-1]))
//     }
//     return newAry
// }
// x=['a','b','c','d','e','f','g','h']
// console.log(revers([1,2,3,4,5],x))



// z=[]
// function capArray(Array){
//     for(i=0;i<Array.length;i++){
//     z[i]=Array[i].toUpperCase()
//     }
//     return z
// }
// x=['milind','is','my','name']
// console.log(capArray(x))


// addItem=Array,item=> Array.push(item)
// console.log(addItem('toy','kjdas','asdb'))



// function removeItem(Array,item){
//     Array.splice(Array.indexOf(item),1)
//     return Array
// }
// console.log(removeItem(['my','name','is','Milind'],'is'))



// sum=0
// function a(){
//     for(i=0;i<arguments.length;i++){
//         sum=sum+arguments[i]
//     } 
//     return sum
// }
// console.log(a(1,2,3,4))



// function ip(){
    
// x=Math.random()*172
// x=Math.ceil(x)
// y=Math.random()*16
// y =Math.ceil(y)
// z=Math.random()*254
// z=Math.ceil(z)
// p=Math.random()*10
// p=Math.floor(p)
// ipp=`${x}.${y}.${z}.${p} `
// return console.log(ipp)
// }
// ip()




// z=0
// sum=0
// y=0
// x=0
// nsum=0
// function sumOfOdd(n1,n2){
//     for(i=n1-1;i<n2;i++){
//         z=i+1
//         if(z%2==0){
//             sum=sum+z
//             x++
//         }
//         else if(z%2!=0){
//             nsum=nsum+z
//             y++
//         }
//     }
//     console.log(`there are ${y++} odd numbers`)
//     console.log(`there are "${x++}" even numbers`)
//     console.log(`sum of even numbers is ${sum}`)
//     console.log(`sum of odd numbers is ${nsum}`)
// }





// sumOfOdd(0,100)
// function  something(x1,x2){
//     if(x1%2==0){
//         console.log(x1)
//     }
// }
// something(7)






























