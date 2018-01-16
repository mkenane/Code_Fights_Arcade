function remove(array, index) {
   array.splice(index, 1)
   return array
}

const oneException = function (my_list) {
   let highest = my_list[0] - 1
   let counter = 0
   for (index in my_list) {
       if (my_list[index] > highest) {
           highest = my_list[index]
   } else {
       counter += 1
       }
   }
   return counter === 0
}

const almostIncreasingSequence = function (my_list) {
   const bools = []
   for (element in my_list) {
       const copyOfList = my_list.slice()
       // console.log('list copy', copyOfList)
       let oneMissing = remove(copyOfList, element)
       // console.log('current list running', oneMissing)
       const sequencedOrNot = oneException(oneMissing)
       // console.log(sequencedOrNot)
       bools.push(sequencedOrNot)
       // console.log('----')
   }
   return bools.includes(true)
}



///CHRIS CODE

function almostIncreasingSequence(sequence) {
emptyArray = []
duplicateCheckArray = []
sequence.map(Number)
var counter = 0;
    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] >= sequence[i + 1]) {
            counter += 1

          for(x = i+1; x < sequence.length; x++) {
            if (sequence[x] >= sequence[i]) {


              console.log(sequence[x])
              console.log(sequence[i])
              counter += 1}
            }
          }
        else if (counter > 1) {

            return false
        }
    }
    return true
}



//************ 28/34*******


function almostIncreasingSequence(sequence) {
emptyArray = []
duplicateCheckArray = []
sequence.map(Number)
var counter = 0;
    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] >= sequence[i + 1]) {
            counter += 1

            console.log(sequence[i])
            console.log(sequence[i+1])
            emptyArray.push(i+1)
            console.log(emptyArray)
          break
        }
    }


  console.log("next loop")

    for(x = emptyArray[0]; x < sequence.length; x++) {
            if (sequence[x] >= sequence[x + 1]) {
              counter += 1
              console.log(sequence[x+1])


            }
          }


  if (counter > 1) {

            return false
        }
    else {
    return true
}}



    // var copy1 = sequence.slice()
    // var copy2 = sequence.slice()
    //  var copy3 = sequence.slice()
    //
    // copy1.splice(emptyArray[0], 1)
    // copy2.splice(emptyArray[0]+1, 1)
    // copy2.splice(emptyArray[0]+2, 1)



//********** CHRIS STRUCTURE HELP

// var emptyArray = [];
// var counter;
// function firstLoop(sequence) {
//     counter = 0;
//     for (var i = 0; i < sequence.length; i++) {
//         if (sequence[i] >= sequence[i + 1]) {
//             counter += 1;
//             console.log(sequence[i]);
//             console.log(sequence[i + 1]);
//             emptyArray.push(sequence.indexOf(i));
//             console.log(emptyArray);
//             break
//         }
//     }
//     console.log(counter);
//     console.log(sequence);
//     return sequence
//
// }
//
// function secondLoop(sequence) {
//     var loopStart = sequence[emptyArray[0]];
//
//     // console.log("next loop starts at index of ");
//     // console.log(loopStart);
//
//
//     for (x = loopStart; x < sequence.length; x++) {
//         // console.log("elements");
//         // console.log(sequence[x]);
//         // console.log(sequence[x + 1]);
//
//         //[1, 2, 3, 4, 5, 3, 5, 6]
//         if (sequence[x] >= sequence[x + 1]) {
//             counter += 1
//         }
//         // console.log("counter is at ");
//         // console.log(counter)
//     }
// }
//
// function almostIncreasingSequence(sequence) {

    // sequence.map(Number);

// *************FIRST LOOP****************************************
//
//     var counter = 0;
//     for (var i = 0; i < sequence.length; i++) {
//         if (sequence[i] >= sequence[i + 1]) {
//             counter += 1;
//             console.log(sequence[i]);
//             console.log(sequence[i + 1]);
//             emptyArray.push(sequence.indexOf(i));
//             console.log(emptyArray);
//             break
//         }
//     }
//     console.log(counter);
//
//     ********************DO I CONTINUE TO RUN SECOND LOOP CHECK****
//
//
//
// if var doI = true,  go on to next loop, if not entire function should return false
//
//
//     *****************NEXT LOOP***********************************
//
//
//     var loopStart = sequence[emptyArray[0]];
//
//     console.log("next loop starts at index of ");
//     console.log(loopStart);
//
//
//     for (x = loopStart; x < sequence.length; x++) {
//         console.log("elements");
//         console.log(sequence[x]);
//         console.log(sequence[x + 1]);
//
//         //[1, 2, 3, 4, 5, 3, 5, 6]
//         if (sequence[x] >= sequence[x + 1]) {
//             counter += 1
//         }
//         console.log("counter is at ");
//         console.log(counter)
//     }


//******************** FINAL CHECK ****************


//     sequence = firstLoop(sequence);
//
//     if (sequence[emptyArray[0]] < sequence[emptyArray[0] + 2]) {
//         sequence = secondLoop(sequence);
//         return counter <= 1;
//     } else {
//         return false
//     }
//     // if (counter > 1) {
//     //
//     //     return false
//     // }
//     // else {
//     //     return true
//     // }
// }
// almostIncreasingSequence([1, 2, 3, 4, 5]);
