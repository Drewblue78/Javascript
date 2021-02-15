function upperCaseFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowerCaseAllWordsExceptFirstLetters(string) {
  return string.replace(/\S*/g, function (word) {
    return word.charAt(0) + word.slice(1).toLowerCase();
  });
}

var input = 'hello World, whatS up?';
var desiredOutput = upperCaseFirstLetter(lowerCaseAllWordsExceptFirstLetters(input));

console.log(desiredOutput);