// Implement a function capitalize(str) that returns a string in which 
// the initial character is capitalized (if it is a letter) and all other
// letters are converted to lower case; characters other than letters are
// not affected. For example, both capitalize("BOOLEAN") and 
// capitalize("boolean") should return the string "Boolean".

function capitalize(str) {
  return str.substr(0, 1).toUpperCase() +
    str.substr(1).toLowerCase();
}

