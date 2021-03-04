const findEqual = (array) => {
  return (soughtValue) => {
    var quantity = 0
    for (var i = 0; i < array.length; i++) {
      quantity += soughtValue === array[i] ? 1 : 0
    }
    return Math.floor(quantity/2)
  }
}

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

function sockMerchant(n, ar) {
  var result = 0
  const uniqueValues = ar.filter(onlyUnique)
  const arrayResult = uniqueValues.map(findEqual(ar))
  arrayResult.forEach(element => {
    result += element
  })
  return result
}

const n = 9
const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
sockMerchant(n, ar)