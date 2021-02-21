const vowels = ['a', 'e', 'i', 'o', 'u'];

function isEnglishConsonant(ch) {
  if (vowels.indexOf != String(ch).toLowerCase()) {
    console.log(ch + "is a consonant");
  } else console.log(ch + "is not a consonant");
}