class Test {
  id: string;

  static create(data) {
    const test = new Test();
    test.id = data.id;
    return test;
  }
}

export default Test;
