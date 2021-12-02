const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   return tutorials.map(function(title) {
//     const words = title.split(" ");
//     const capitalisedWords = words.map(function(word) {
//       let letters = word.split("");
//       letters[0] = letters[0].toUpperCase();
//       return letters.join("");
//     });
//     const newTitle = capitalisedWords.join(" ");
//     return newTitle;
//   });
// }

const titleCased = () => {
  return tutorials.map(title => {
    const words = title.split(" ");
    const capitalisedWords = words.map(word => {
      let letters = word.split("");
      letters[0] = letters[0].toUpperCase();
      return letters.join("");
    });
    const newTitle = capitalisedWords.join(" ");
    return newTitle;
  });
}
