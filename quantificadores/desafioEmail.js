const texto = `
Os e-mails dos convidados são:
  - fulano@cod3r.com.br
  - xico@gmail.com
  - joao@empresa.info.br
  - maria_silva@registro.br
  - rafa.sampaio@yahoo.com
`
//Feitas
console.log(texto.match(/(\w.+@)(\w+)(.\w+)(.\w+)?/gi))
console.log(texto.match(/[A-z0-9_]+@[A-z0-9_]+.[A-z0-9_]+.?[A-z0-9_]+/gi))

//Consultadas
console.log(texto.match(/[a-zA-Z0-9_]+@[a-zA-Z0-9_]+\.[a-zA-Z0-9_]{2,4}/g))
console.log(texto.match(/\w+@\w+\.\w{2,4}/g))
console.log(texto.match(/[\w.]+@\w+\.\w{2,4}/g))
console.log(texto.match(/[\w.]+@\w+\.\w{2,4}\.?\w{0,2}/g))

// no futuro...
console.log(texto.match(/[\w.]+@\w+\.\w{2,4}(\.\w{2})?/g))
