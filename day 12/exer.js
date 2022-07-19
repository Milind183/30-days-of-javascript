////////////          question 1
// x = "Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month."
// c = /\d+/g
// ary = x.match(c)
// sum = 0
// let z;
// for(const z of ary){
//     sum = sum + +z
// }
// console.log(sum)


///////////               question 2
// const sent =  "The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction"
// const pat = /-?\d/g
// const pat2 = /\d/g 
// const points = sent.match(pat)
// const newary = points.map((num) => parseInt(num))
// const sortedPoints = newary.sort(function (a,b){
//     return a - b
// })
// distance = Math.abs(sortedPoints[0])+sortedPoints[sortedPoints.length-1]
// console.log(points,sortedPoints,distance)



let result = []
let obj = {}
let paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`

function tenMostFrequentWords(sentense){
    paragraph = paragraph.toLowerCase()
    let aryOfWords = paragraph.split(' ')
    for(word of aryOfWords){
        if(obj[word]){
            obj[word]++
        }
        else{
            obj[word] = 1
        }
    }
    x = Object.values(obj)
    console.log(x.sort(function((a,b) => {

    }));
    // for([x,y] of x){
    //     result.push({word: x, count:y})
    // }
    // console.log(result);

}
tenMostFrequentWords(paragraph)

































// function cleanText(sen){
//     pat1 = /%/g
//     pat2 = /\$/g
//     pat3 = /@/g
//     pat4 = /&/g
//     pat5 = /#/g
//     pat6 = /;/g
//     newSen = sen.replace(pat1,'')
//     newSen = newSen.replace(pat2,'')
//     newSen = newSen.replace(pat3,'')
//     newSen = newSen.replace(pat4,'')
//     newSen = newSen.replace(pat5,'')
//     newSen = newSen.replace(pat6,'')
//     console.log(newSen)
// }

// sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
// console.log(cleanText(sentence))

