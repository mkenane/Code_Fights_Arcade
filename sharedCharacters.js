
function commonCharacterCount(s1, s2) {
common = []
var s1Array = s1.split("")
var s2Array = s2.split("")

if (s1Array.length >= s2Array.length) {
for (var i = 0; i < s1Array.length; i++) {
  for (var j = 0; j < s2Array.length; j++) {
    if (s1Array[i] === s2Array[j]) {
      common.push(s2Array[j])
      s1Array[i] = '-'
      s2Array[j] = '*'

      console.log(s1Array)
      console.log(s2Array)

  }}}}

else {
for (var k = 0; k < s2Array.length; k++) {
  for (var m = 0; m < s1Array.length; m++) {
    if (s2Array[k] === s1Array[m]) {
      common.push(s1Array[m])
      s2Array[k] = '-'
      s1Array[m] = '*'
      console.log(s2Array)
      console.log(s1Array)
}}}}
console.log(common)
  return common.length
}

  // function removeDuplicates(word) {
  // var unique = ''
  // for (var i = 0; i < word.length; i++) {
  //   if (unique.indexOf(word[i]) == -1) {
  //     unique += word[i]
  //   }
  // }
  //   return unique
  // }
    // console.log(removeDuplicates("barbara"))
