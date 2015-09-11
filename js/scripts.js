function findReplace(sentence, originalWord, replacedWord) {
  return sentence.replace(new RegExp(originalWord, 'gi'), replacedWord);
}
