// id=[]
// char=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
// 'A','B','C','D','E','F','G','H','I','K','L','M','N','O','P','Q','R','S','T','V','X','Y','Z',
// '1','2','3','4','5','6','7','8','9','0','!','@','#','$','%','&','*']
// z=[]
// zz=[]
// num=5
// function usedIdGen(){
//     for(i=0;i<num;i++){
//         x=Math.random()*char.length
//         x=Math.floor(x)
//         id.push(char[x])
//         id.toString()
//     }
//     console.log(id)    
// }
// usedIdGen()


// function rbg(){
// for(i=0;i<3;i++){
//     x=Math.random()*255
// x=Math.floor(x)
// y=Math.random()*255
// y=Math.floor(y)
// z=Math.random()*255
// z=Math.floor(z)
//     console.log(x,y,z)
// }
// }
// rbg()


// d=[]
// num=Math.floor(Math.random()*5)
// function hex(){
// for(i=0;i<num;i++){
//     x=Math.floor(Math.random()*255)
//     y=Math.floor(Math.random()*255)
//     z=Math.floor(Math.random()*255) 
//     r = x.toString(16);
//     g = y.toString(16);
//     b = z.toString(16);
//     d.push((r+g+b))
// }
// console.log(d)
// }
// hex()


// function convertRBGToHex(R,B,G){
//     x=R.toString(16)
//     y=B.toString(16)
//     z=G.toString(16)
//     console.log(`hexcode = #${x}${y}${z}`) 
// }
// convertRBGToHex(0,5,42)




// h=[]
// rgb=[]
// num=Math.floor(Math.random()*10)
// function generateColors(){
//     for(i=0;i<num;i++){
//     x=Math.floor(Math.random()*255)
//     y=Math.floor(Math.random()*255)
//     z=Math.floor(Math.random()*255) 
//     r = x.toString(16);
//     g = y.toString(16);
//     b = z.toString(16);
//     h.push((`#${r}${g}${b}`))   
//     }
//     console.log(h,h.length)

//     for(i=0;i<num;i++){
//         a=Math.floor(Math.random()*255)
//         d=Math.floor(Math.random()*255)
//         e=Math.floor(Math.random()*255) 
//         c=(`rgb(${a},${d},${e})`)
//         rgb.push(c)    
//     }
//     console.log(rgb,rgb.length)
// }
// generateColors()




// x=1
// function factorial(n){
//     for(i=1;i<n;i++){
//         x=x*i
//     }
//     console.log(x)    
// }
// factorial(7)



// function isarr(array){
//     if(Array.isArray(array)==true){
//     console.log(`yes it is `)
//     }
//     else{
//         console.log(`its not an array`)
//     }
// }
// isarr()




// suma=0
// function sum(){
//     for(i=0;i<arguments.length;i++){
//         suma=suma+arguments[i]
//         console.log(suma)
//     }
// }
// sum(3,6,5)



// z=[1,2,3,4,5]
// x=0
// function some(array){
//     for(j=0;j<array.length;j++){
//         if(typeof(array[j])=="number"){
//             x=x+array[j]
//             console.log(x)
//         }
//         else
//         {
//             console.log(`Die single :)`)
//         }
//     }        
// }
// some([1,36,'s'])




// z=[]
// function modifyArray(array){
//     if(array.length>4){
//     array[4]=array[4].toUpperCase()
//     console.log(array)
//     }
//     else{
//         console.log(`does not exists`)
//     }
// }   
// x=['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']
// xx=['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']
// xxx=['Google','Apple', 'Amazon','ibm']
// modifyArray(xxx)



// function unique(array){
//     for(i=0;i<array.length;i++){
//         for(j=0;j<array.length;j++){
//             if(i!=j){
//                 if(array[i]==array[j]){
//                     return false
//                 }
//             }
//         }
//     }
//     return true
// }
// x=['milind','milin']
// console.log(unique(x))



// x=0
// function sameType(array){
//     x=typeof[array[0]]
//     for(i=0;i<array.length;i++){
//         if(typeof(array[i])==`'${x}'`){
//             console.log(array)
//         }
//         else{
//             console.log(`it works ;)`)
//         }
//     }
// }

// z=[1,3,5,9,6,6]
// sameType(z)




// function vari(n){
//     if(n=='$'||n=='_'){
//         console.log(`is valid`)
//     }
//     else{
//         console.log(`not valid`)
//     }
// }
// vari('_')


// z=[]
// function shuffleArray(array){
// return [...array].sort(() => Math.random() > 0.5 ? 1:-1).slice(0,array.length)
// }
// m=[1,2,3,4,5,9]
// console.log(shuffleArray(m))
// m.splice(m[4],1)
// console.log(m)



// bn=[]
// v=0
// function uniqnumber(){
//     for(i=0;i<=7;i++){
//         x=Math.floor(Math.random()*9)
//         bn.push(x)
//         if(bn[i]===bn[i++]){
//             bn.splice(bn[i],1)
//         }
//         else{
//             bn.push(x)
//         }
//     }
//     console.log(bn)
// }
// uniqnumber()























