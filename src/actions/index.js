import { dataSounds1, dataSounds2 } from '../dataOfSounds';
export { addTrigger, addAllSounds, keysTrigger }

const keysTrigger = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];


const addAllSounds = (all) => {
  return ({
    type: all,
    soundData: dataSounds1
});

const addTrigger = (letter) => {
  let indexLetter = keysTrigger.indexOf(letter);
  return ({
    type: letter,
    soundData: dataSounds1[indexLetter] 
  });
};

