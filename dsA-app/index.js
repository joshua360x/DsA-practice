// partner 1 - reverse words
// const string = 'Josh is super cool';

// function reverseWords(sentence) {
//   return sentence
//     .split(' ')
//     .map((word) => {
//       return word.split('').reverse().join('');
//     })
//     .join(' ');
// }

// console.log(reverseWords(string));

// partner 2 - title Case
function titleCase(sentence) {
  return sentence
    .split(' ')
    .map((word) => {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' ');
}

const newTItle = titleCase('alchemy ROCKS goLD');
// eslint-disable-next-line no-console
console.log('🚀 ~ file: Untitled-1 ~ line 16 ~ newTItle', newTItle);




