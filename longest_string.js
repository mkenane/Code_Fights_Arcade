function allLongestStrings(inputArray) {
empty = []
arrayOfLongest = []
for (var i = 0; i< inputArray.length; i++) {
  empty.push(inputArray[i].length)
  empty.sort(function(a, b) {
  return a - b;
})
empty.reverse()
}

var lengthofLongest = empty[0]

for (var x = 0; x < inputArray.length; x++ ) {
  if (inputArray[x].length == lengthofLongest) {
    arrayOfLongest.push(inputArray[x])
  }
  }
  return arrayOfLongest
}
