describe("finder", function() {

  it("finds a word in a string", function(){
    expect(finder("the cat says woof")).to.eql("woof")
  })
})
