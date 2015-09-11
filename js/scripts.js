function findReplace(sentence, originalWord, replacedWord) {
  return sentence.replace(new RegExp(originalWord, 'gi'), replacedWord);
}

$(document).ready(function() {
  $("form#findReplace").submit(function(event) {
    var sentence = $("input#sentence").val();
    var originalWord = $("input#originalword").val();
    var replacedWord = $("input#replacedword").val();
    var result = findReplace(sentence, originalWord, replacedWord);

    $("#result p").text(result);
    $("#result").show();

    event.preventDefault();
  })
})
