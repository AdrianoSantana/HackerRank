const findQuantityLetterA = (s, n) => {
  var letters = s.split('')
  var letterAQuantity = 0
  letters.forEach(letter => {
    letterAQuantity += letter === 'a' ? 1 : 0
  });
  return { letters, letterAQuantity}
}

const findMultiplicated = (letterAQuantity, n, lettersSize, letters) => {
  const quantityRepeated = Math.floor(n / lettersSize)
  var result = 0
  const lettersLeftOver = n % lettersSize
  for(var i = 0; i < lettersLeftOver; i++) {
    result += letters[i] === 'a' ? 1 : 0
  }
  result += quantityRepeated * letterAQuantity
  return result 
}

function repeatedString(s, n) {
  if (s === 'a')
    return n
  const { letters, letterAQuantity } = findQuantityLetterA(s, n)
  const lettersSize = letters.length
  return findMultiplicated(letterAQuantity, n, lettersSize, letters)
}

const s = 'kmretasscityylpdhuwjirnqimlkcgxubxmsxpypgzxtenweirknjtasxtvxemtwxuarabssvqdnktqadhyktagjxoanknhgilnm'
const n = 736778906400

console.log(repeatedString(s, n))
