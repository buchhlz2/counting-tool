const countWords = document.getElementById('countWords');
const countCharacters = document.getElementById('countCharacters');

function count(countType) {
  let countResult = document.getElementById('countResult');
  let words = document.getElementById('wordsInput').value;

  if (countType.value == 'countWords') {
    let parsedWords = words.replace(/(\r\n|\n|\r)/gm, " ").replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").split(' ').filter(word => word != "");
    countResult.innerHTML = parsedWords.length;
  } else if (countType.value == 'countCharacters') {
    let characters = words.split('');
    countResult.innerHTML = characters.length;
  }
}
