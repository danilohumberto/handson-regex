const texto = `
CPF dos aprovados:
  - 600.567.890-12
  - 765.998.345-23
  - 454.674.333-21
  - 678.987.123-87
  - 789.112.543-00
  - 78911254300
  - 01547838622
  `
//Professor
console.log(texto.match(/\d{3}\.\d{3}\.\d{3}-\d{2}/g))

//Feitas
console.log(texto.match(/\b\d.{1,14}\b/g))
console.log(texto.match(/\d{3}\.?\d{3}\.?\d{3}-?\d{2}/g))



