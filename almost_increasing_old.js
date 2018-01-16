


function almostIncreasingSequence(sequence) {
emptyArray = []
sequence.map(Number)


   function check(element, element2) {
 if (element >= element2) {
   return false}
  else {
    return true
  }
}


//*************FIRST LOOP****************************************

var counter = 0;
    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] >= sequence[i + 1]) {
            counter += 1

            console.log(sequence[i])
            console.log(sequence[i+1])
            emptyArray.push(sequence.indexOf(i))
            console.log(emptyArray)
          break
        }
    }
    console.log(counter)

    //********************DO I CONTINUE TO RUN SECOND LOOP CHECK****



var doI = check(sequence[emptyArray[0]], (sequence[emptyArray[0]+2]))
//if var doI = true,  go on to next loop, if not entire function should return false


    // *****************NEXT LOOP***********************************



    var loopStart = sequence[emptyArray[0]]

  console.log("next loop starts at index of ")
  console.log(loopStart)


    for(x = loopStart; x < sequence.length; x++) {
      console.log("elements")
              console.log(sequence[x])
              console.log(sequence[x+1])

              //[1, 2, 3, 4, 5, 3, 5, 6]
            if (sequence[x] >= sequence[x + 1]) {counter += 1
            }
            console.log("counter is at ")
            console.log(counter)
          }


//******************** FINAL CHECK ****************

  if (counter > 1) {

            return false
        }
    else {
    return true
}}



console.log(almostIncreasingSequence([1, 2, 3, 4, 5, 3, 5, 6]))

//*************structure**********

// run first loop:
//                if emptyArray.length = 0:
//                                        return true for entire  function
//                if emptyArray.length = 1:
//                                        check var doI:
//                                                      if var doI is false:
//                                                                          return false for entire function
//                                                      if var doI is true:
//                                                                          run second loop:
//                                                                                           if counter is > 1:
//                                                                                                            return false for entire function
//                                                                                            if counter < 1:                                                                                                                                               return true for entire funciton
//
