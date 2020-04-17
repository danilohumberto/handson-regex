const texto = `
ca	r
r	o s!
`
// \s é igual ao espaco em branch " "
console.log(texto.match(/ca\tr\nr\to\s/))
console.log(texto.match(/ca\tr\nr\to /))