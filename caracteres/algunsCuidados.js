const textoUmaLinha = '...' // aspas simples ou duplas

const textoMultiLinha = `
  linha 1
  linha 2
`

// cuidado com o tab! aqui estamos usando de fato o tab.
console.log('	'.match(/\s/g))

// espaço em branco ! aqui esta usando o espaço em branco
console.log('   '.match(/\s/g))
