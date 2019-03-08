// Novel NPM library to turn any text into mOcKiNg sPoNgEbOb tExT
mock = string => {
  if(typeof string !== "string"){
    throw new Error("Input must be a string")
  }
  let mockText = [];
  string.split(" ").map(word => {
    let mockWord = []
    word.split("").map((letter, index) => mockWord.push(index%2!==0 ? letter.toUpperCase() : letter.toLowerCase()));
    mockText.push(mockWord.join(""));
  })
  return mockText.join(" ");
}

// console.log(mock("my string input here"));
// console.log(mock(42));
// console.log(mock("this isa number4523"));
console.log(mock("Oh God. Why"))