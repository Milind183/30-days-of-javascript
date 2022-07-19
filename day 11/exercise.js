// const constants = [2.72, 3.14, 9.81, 37, 100]
// const [ed,pi,grav,humanbody,waterboiling] = constants
// console.log(ed,pi,grav,humanbody,waterboiling)


// const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
// const [fin,est,swe,den,nor] = countries
// console.log(fin,est,swe,den,nor)


// const rectangle = {
//   width: 20,
//   height: 10,
//   area: 200,
//   perimeter: 60
// }

// const {width,height,area,perimeter} = rectangle


const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]

// for(const {name,scores,skills,age} of users){
//     console.log(name,scores,skills,age)
// }


// for(const {name,scores,skills,age} of users){
//     if(skills.length <= 2 ){
//         console.log(name,scores,skills,age)
//     }
// }


// const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
// const [name, skills, [jsScore, reactScore]] = student

// console.log(name,skills,jsScore,reactScore)

// const students = [
//     ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
//     ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
// ]

// function toConvert(Array){
//     const [[nam1,sk1,sc1],[nam2,sk2,sc2]] = Array
//     newArray = [{name:nam1,skills:sk1,scores:sc1},{name:nam2,skills:sk2,scores:sc2}]
     // console.log(newArray)
// }
// toConvert(students)

const student = {
  name: 'David',
  age: 25,
  skills: {
    frontEnd: [
      { skill: 'HTML', level: 10 },
      { skill: 'CSS', level: 8 },
      { skill: 'JS', level: 8 },
      { skill: 'React', level: 9 }
    ],
    backEnd: [
      { skill: 'Node',level: 7 },
      { skill: 'GraphQL', level: 8 },
    ],
    dataBase:[
      { skill: 'MongoDB', level: 7.5 },
    ],
    dataScience:['Python', 'R', 'D3.js']
  }
}

x = new Object(student)

x.skills.frontEnd.push({skill:'Bootstrap',level:'8'})
x.skills.backEnd.push({skill:'Express',level:'9'})
x.skills.dataBase.push({skill:'SQL',level:'8'})
x.skills.dataScience.push('SQL')
console.log(x)
