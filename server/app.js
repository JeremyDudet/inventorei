class Stack extends Array {
  constructor(...elements) {
    super(...elements);
  }
}

const s = new Stack(1, 2, 3);
console.log(s);
