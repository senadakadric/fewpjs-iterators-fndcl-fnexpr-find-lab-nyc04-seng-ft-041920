// const testVar = {}

// function testFunc() {
//   return "hi"
// }

const superbowlWin = (arrayOfObjects) => {
  let winningObject = arrayOfObjects.find((obj) => obj.result === "W");
  console.log(winningObject);
  return winningObject ? winningObject.year : undefined;
};
