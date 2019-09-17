const { simplifySpelling } = require('./app')

test('1', () => {
  return simplifySpelling('venta VENTA') === 'benta BENTA'
})

test('2', () => {
  return simplifySpelling('zapato ZAPATO') === 'sapato SAPATO'
})

test('3', () => {
  return simplifySpelling('hora HORA') === 'ora ORA'
})

test('4', () => {
  return simplifySpelling('chita CHITA Chita') === 'chita CHITA Chita'
})

test('5', () => {
  return simplifySpelling('guerra GUERRA Guerra') === 'gerra GERRA Gerra'
})

test('5.1', () => {
  return simplifySpelling('llegué LLEGUÉ Gué...') === 'llegé LLEGÉ Gé...'
})

test('6', () => {
  return simplifySpelling('guitarra GUITARRA Guitarra') === 'gitarra GITARRA Gitarra'
})

test('6.1', () => {
  return simplifySpelling('guía GUÍA Guí...') === 'gía GÍA Gí...'
})

test('7', () => {
  return simplifySpelling('ingeniería INGENIERÍA') === 'injeniería INJENIERÍA'
})

test('7.1', () => {
  return simplifySpelling('género GÉNERO') === 'jénero JÉNERO'
})

test('8', () => {
  return simplifySpelling('agitar AGITAR') === 'ajitar AJITAR'
})

test('8.1', () => {
  return simplifySpelling('logística LOGÍSTICA') === 'lojística LOJÍSTICA'
})

function test(label, body) {
  if (!body()) console.log(`Failed: ${label}`);
}

