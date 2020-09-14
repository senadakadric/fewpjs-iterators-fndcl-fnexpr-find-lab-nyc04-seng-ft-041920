const superbowlWin = (arrayOfObjects) => {
  let winningObject = arrayOfObjects.find((obj) => obj.result === "W");
  return winningObject ? winningObject.year : undefined;
};
