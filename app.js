/* eslint-disable */

// Challenge1:
function reverseWords(sentence) {
    return sentence
        .split(' ')
        .map((word) => word.split('').reverse().join(''))
        .join('');
}
reverseWords('alchemy rocks gold');

//Challenge2:
function titleCase(sentence) {
    return sentence
        .split('')
        .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join('');
}
titleCase('alchemy ROCKS goLD');

//Challenge3:
function oddishOrEvenish(number) {
    // const nums= number.split('');
    // const initial= 0;
    // const sum = nums.reduce(previous, current) => previous + current, initial );
    const sum = number
        .toString()
        .split('')
        .reduce((all, n) => {
            all += Number(n);
            return all;
        }, 0);
    return sum % 2 === 0 ? 'Evenish' : 'Oddish';
}
oddishOrEvenish(42);
oddishOrEvenish(121);

function anagrams(wordOne, wordTwo) {
    let word1 = wordOne.split('').sort().join();
    let word2 = wordTwo.split('').sort().join();
    const results = word1 === word2 ? 'true' : 'false';
    // console.log('results', results);
    return results;
}
anagrams('superintended', 'unpredestined');
anagrams('pictorialness', 'documentarily');
anagrams('Aidin', 'dinAi');
anagrams('qoewhrwo', 'sdfjghrwoghfqo');

//Challenge4:

// function uniqueChar(string) {
//     var unique = '';
// }
// uniqueChar('abdacabad');

// Will come back to this
