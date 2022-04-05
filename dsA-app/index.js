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

//oddish-evenish

// const number = 121;

// function isEven(number) {
//   if (number % 2 === 0) {
//     return 'Evenish';
//   } else {
//     return 'oddish';
//   }
// }

// function oddishOrEvenish(number) {
//   // let total = 0
//   const string = number
//     .toString()
//     .split('')
//     .map((string) => {
//       return Number(string);
//     })
//     .reduce((previous, current) => previous + current, 0);
//   return isEven(string);
// }

// console.log(oddishOrEvenish(number));

//array at
function at(arr, index) {
  if (index > -1) {
    return arr[index];
  } else {
    return arr[arr.length + index];
  }
}

const newArrayAt = at([1, 2, 3], -2);
// eslint-disable-next-line no-console
console.log('🚀 ~ file: index.js ~ line 65 ~ newArrayAt', newArrayAt);

// fizzBuzz (partner 1)
function fizzBuzz(number) {
  const numbersArr = [];
  for (let i = 1; number >= i; i++) {
    numbersArr.push(i);
    if (i % 3 === 0 && i % 5 === 0) {
      numbersArr.pop();
      numbersArr.push('FizzBuzz');
    } else if (i % 3 === 0) {
      numbersArr.pop();
      numbersArr.push('Fizz');
    } else if (i % 5 === 0) {
      numbersArr.pop();
      numbersArr.push('Buzz');
    }
  }
  return numbersArr;
}
fizzBuzz(16);

// eslint-disable-next-line no-console
console.log(fizzBuzz(16));

function anagrams(wordOne, wordTwo) {
  // 'superintended', 'unpredestined'	true

  // if (wordOne.length < wordTwo.length || wordOne.length > wordTwo.length) {
  //   return false
  // }
  // else {

  //   let wordArr = wordOne.split('')
  //   let wordArr2 = wordTwo.split('')
  //   for (let i = 0; i < wordOne.length; i++) {
  //     for (let j = 0; j < wordTwo.length; j++) {
  //       if(wordOne[i] === wordTwo[j])

  //     }

  //   }

  // }

  // ^^^ O(2)

  const firstWord = wordOne.split('').sort().join('');
  const secondWord = wordTwo.split('').sort().join('');

  if (firstWord === secondWord) {
    return true;
  }
}

// eslint-disable-next-line no-console
console.log(anagrams('super', 'upers'));

// eslint-disable-next-line no-unused-vars
function uniqueString(strings) {
  const lettersThatShouldBeOrderedAndUnique = strings.map((s) =>
    [...new Set(s)].sort()
  );
  const duplicatesWillbeFormed = [
    ...new Set(...lettersThatShouldBeOrderedAndUnique),
  ];

  return strings.find((string) => {
    return duplicatesWillbeFormed.indexOf(string[0] === -1);
  });
}

// function uniqueChar(string) {
//   const charrachter = string.split('').sort();
//   for (let i = 0; i < string.length; i++) {
//     const current = charrachter[i];
//     const prev = charrachter[i - 1];
//   }
// }
