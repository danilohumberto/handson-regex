const texto = "a   b"

console.log(texto.match(/a   b/))

console.log(texto.match(/a\s\s\sb/))

//no futuro
console.log(texto.match(/a {3}b/))
console.log(texto.match(/a\s{3}b/))

const texto2 = "a         b"
console.log(texto2.match(/a\s+b/))
