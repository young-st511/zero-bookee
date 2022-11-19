function makeCommaNumber(num: number) {
  const numStr = num.toString().split("");
  const newNumArr: string[] = [];

  for (let i = 0; i < num.toString().length; i++) {
    if (i % 3 === 0 && i !== 0) {
      newNumArr.unshift(",");
    }
    newNumArr.unshift(numStr.pop() ?? "");
  }
  return newNumArr.join("");
}

export default makeCommaNumber;
