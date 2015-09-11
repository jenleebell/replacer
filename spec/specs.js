describe("findReplace", function() {

  it("finds one word in a sentence and replaces it with a new word", function(){
    expect(findReplace("meow", "meow", "woof")).to.eql("woof")
  })

  it("finds multiple instances of a word in a sentence and replaces them all with the new word", function(){
    expect(findReplace("the dog says meow meow", "meow", "woof")).to.eql("the dog says woof woof")
  })

  // it("finds multiple instances of a word in a sentence and replaces them all with the new word regardless of the case", function() {
  //   expect(findReplace("Mr. Meow the dog says meow meow", "meow", "woof")).to.eql("woof")
  // })

})
