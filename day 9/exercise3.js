p=[
    {name: 'Milind '},
    {name: 'Vedant '},
    {name: 'Bhargav '},
    {name: 'Aryant '},
    {name: 'Anant '}
]
p.sort((a,b) =>{
    if(a.name < b.name ) return -1
    return 0
})
console.log(...p)

