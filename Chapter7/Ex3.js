const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

function isEnglishConsonant(ch) {
  if (vowels.indexOf != String(ch)) {
    console.log(ch + "is a consonant");
  } else console.log(ch + "is not a consonant");
}