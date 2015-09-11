describe("replacer", function() {

  it("finds one word in a sentence and replaces it with a new word", function(){
    expect(findReplace("meow", "meow", "woof")).to.eql("woof")
  })
})
