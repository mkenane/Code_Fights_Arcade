function isLucky(n) {
var stringArray= n.toString().split("")
var sum1 = 0
var numberArray1 = []

var sum2 = 0
var numberArray2 = []


for (var i = 0; i < stringArray.length/2; i++) {
numberArray1.push(parseInt(stringArray[i]))
sum1 += numberArray1[i]
}



for (var x = stringArray.length/2; x < stringArray.length; x++) {
numberArray2.push(parseInt(stringArray[x]))
}
for (var m = 0; m < numberArray2.length; m++){
sum2 += numberArray2[m]}

if (sum1 === sum2) {
  return true
}

else {
  return false
}
}
