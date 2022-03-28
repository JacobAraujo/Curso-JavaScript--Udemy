let varA = 'A'
let varB = 'B'
let varC = 'C'

var aux = varA
varA = varB
varB = varC
varC = aux

console.log(`varA = ${varA}\nvarB = ${varB}\nvarC = ${varC}`)

