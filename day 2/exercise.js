console.log(`                                   THIS IS LEVEL 1`)
// string = '30 Days Of JavaScript'
// console.log(string)
// console.log(string.length)
// console.log(string.toUpperCase())
// console.log(string.toLowerCase())
// console.log(string.substr(0,1))
// console.log(string.substr(0,2))
// console.log(string.includes('Script'))
// console.log(string.split())
// console.log(string.split(' '))
// ns='Facebook,Google,Microsoft,Apple,IBM,Oracle,Amazon'
// console.log(ns.split(','))
// console.log(ns.split())
// console.log(string.replace('JavaScript','Python'))
// console.log(string.split())
// console.log(string.charAt(15))
// console.log(string.charCodeAt('J'))
// console.log(string.indexOf('a'))
// console.log(string.lastIndexOf('a'))
// nss='You cannot end a sentence with because because because is a conjunction'
// console.log(nss.indexOf('because'))
// console.log(nss.lastIndexOf('because'))
// console.log(nss.search('because'))
// console.log(string.trim())
// console.log(string.startsWith('30'))
// console.log(string.endsWith('t'))
// console.log(nss.match('a'))
// s1='30 Days of'
// console.log(s1.concat(' Javascript'))
// console.log(string.repeat(2))

console.log(`                                   THIS IS LEVEL 2`)

// console.log(`'There is no exercise better for the heart than reaching down and lifting people up.'`)
// console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`)

// a='10'
// b=10
// console.log(a==b)

// c=9.8
// console.log(c==b)
// console.log(Math.ceil(c))

// x='python , jargon'
// console.log(x.match('on'))
// console.log(Math.floor(Math.random()*100))
// x=Math.random()
// console.log(x*100)
// console.log(Math.floor(Math.random()*255))

// st='JavaScript'
// x=Math.ceil(Math.random()*10)
// letter=st[x]
// console.log(letter)

// console.log(` 1 1 1 1 1\n 2 1 2 4 8 \n 3 1 3 9 27 \n 4 1 4 16 64 \n 5 1 5 25 125`)
// line='You cannot end a sentence with because because because is a conjunction'
// xc='because'
// console.log(line.indexOf(xc))
// console.log(line.lastIndexOf(xc))
// console.log()
// nl="'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence."

console.log(`                                   THIS IS LEVEL 3`)
console.log('')
console.log('')
console.log(`Question 1 `)
                                        ////ANS////
y="'Love is the best thing in this world. Some found their love and some are still looking for their love.'"
x=/love/gi
console.log(y.match(x))
console.log(`Question 2`)
z="'You cannot end a sentence with because because because is a conjunction'"
c=/because/gi
console.log(z.match(c))
console.log(`Question 3`)


const sentence = "'%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'"
sentence1=sentence.replace(/%/gi,'')

sentence2=sentence1.replace(/@/gi,'')
sentence3=sentence2.replace(/$/gi,'')
sentence4=sentence3.replace(/&/gi,'')
sentence5=sentence4.replace(/#/gi,'')
sentence6=sentence5.split('$')

console.log(sentence6)























// console.log(`Question 4`)
// p='He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
// aid=p.match(/\d+/g)
// aid[0]=+aid[0]
// aid[1]=+aid[1]
// aid[2]=+aid[2]

// annualIncome=12*aid[0]+aid[1]+12*aid[2]
// console.log(annualIncome)

