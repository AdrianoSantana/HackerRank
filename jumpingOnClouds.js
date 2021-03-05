
const findDangersClouds = (c) => {
  const dangerClouds = []
  for(var i = 0; i < c.length; i++) {
    if (c[i] === 1) {
      dangerClouds.push(i)
    }
  }
  return dangerClouds
}

const itsDanger = (dangerClouds, value) => {
  var result = 0
  dangerClouds.forEach((element) => {
    result += element === value ? 1 : 0
  })
  return result
}

function jumpingOnClouds(c) {
  var numberResult = -1
  var cloudNumber = 0
  const dangerClouds = findDangersClouds(c)
  while (cloudNumber !== c.length) {
    if (cloudNumber + 2 < c.length) {
      if (itsDanger(dangerClouds, cloudNumber+2) === 0) {
        cloudNumber += 2
      } else {
        cloudNumber += 1
      }
    } else {
      cloudNumber += 1
    }
    numberResult += 1
  }
  return numberResult
}
c = [0, 0, 0, 0, 1, 0]
//c = [0, 0, 1, 0, 0, 0, 0, 1, 0, 0]
//const dangerClouds = findDangersClouds(c)
console.log(jumpingOnClouds(c))
//console.log(itsDanger(dangerClouds, 3))