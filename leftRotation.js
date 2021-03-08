function rotate (array, d) {
  const valoresARotacionar = array.slice(0, d)
  var valoresFixos = array.slice(d, array.length)
  return valoresFixos.concat(valoresARotacionar)
}

function rotLeft(a, d) {
  return rotate(a,d)
}

a = [1,2,3,4,5]
d = 4

console.log(rotLeft(a,d))