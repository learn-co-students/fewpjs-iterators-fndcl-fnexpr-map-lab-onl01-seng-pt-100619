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
  let sentences = tutorial.split(" ") //returns multiple arrays of words
  let upperCaseLettersWords = sentences.map(word =>
    word[0].toUpperCase() + word.slice(1)
        //  console.log(word[0].toUpperCase() + word.slice(1))
    ) // changes the first letter of each word into uppercase and adds to rest of word
    

    return upperCaseLettersWords.join(" "); // joins the words back into sentences
    // console.log(upperCaseLettersWords.join(" "))
  
  
  
});

function titleCased() {
  return title; // without return it returns undefined same as console.log that returns undefined the return has to be explicit in Javascript
}

