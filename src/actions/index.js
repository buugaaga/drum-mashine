import { dataSounds1, dataSounds2 } from '../dataOfSounds';



export const triggerDataSounds = (value) => {
  if(value === 1) {
    return ({
      type: "ONE",
      bankSound: dataSounds1
    })
  } else if (value === 2) {
    return ({
      type: "TWO",
      bankSound: dataSounds2
    })
  }
}

// export const addAllSounds = (all) => {
//   return ({
//     type: all,
//     soundData: dataSounds
//   })
// }

// export const addTrigger = (letter) => {
//   let indexLetter = keysTrigger.indexOf(letter);
//   return ({
//     type: letter,
//     soundData: dataSounds[indexLetter] 
//   });
// };


