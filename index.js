let tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

let result = []

const title = tutorials.map(function(tutorial) {
  let sentences = tutorial.split(" ") //returns an arrays of sentences
  let upperCaseLettersWords = sentences.map(word =>
    word[0].toUpperCase() + word.slice(1)
        //  console.log(word[0].toUpperCase() + word.slice(1))
    )
    

    return upperCaseLettersWords.join(" ");
    // console.log(upperCaseLettersWords.join(" "))
  
  
  
});

function titleCased() {
  return title;
}

