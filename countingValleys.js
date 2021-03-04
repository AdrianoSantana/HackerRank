const detecteValley = (path) => {
  var nivelMar = 0
  var contadorVale = 0
  path.forEach(element => {
    nivelMar += element === 'U' ? 1 : -1
    if (nivelMar === 0 && element === 'U') {
      contadorVale += 1
    }  
  })
  return contadorVale
}

function countingValleys(steps, path) {
  // Write your code here
  const pathArray = path.split('')
  return detecteValley(pathArray)
}

const path = 'DDUUDDUDUUUD'
const steps = 10
console.log(countingValleys(steps, path))