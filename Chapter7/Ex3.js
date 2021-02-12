const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

function isEnglishConsonant(ch) {
  if (ch !== vowels) {
    console.log(ch + "is a consonant");
  } else console.log(ch + "is not a consonant");
}