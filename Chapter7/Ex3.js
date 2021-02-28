// Implement the function isEnglishConsonant(ch), which returns true if ch is a consonant 
// in English, that is, any alphabetic character except one of the five vowels: "a", "e", "i", "o", and "u".
//  As with the isEnglishVowel function presented in the text, your method should recognize 
//  both lower- and uppercase consonants.

const vowels = ['a', 'e', 'i', 'o', 'u'];

function isEnglishConsonant(ch) {
  if (vowels.indexOf != String(ch).toLowerCase()) {
    console.log(ch + "is a consonant");
  } else console.log(ch + "is not a consonant");
}