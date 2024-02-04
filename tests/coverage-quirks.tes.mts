import "mocha";
import { expect } from "chai";
import { divideBy } from "../src/divide-by.mjs";

describe("Error Handling Tests", () => {
  it("Existence Check", () => expect(divideBy).to.exist);
  it("Doesn't Throw on Non-0 Argument", () =>
    expect(divideBy(1, 1)).to.not.throw);
  it("Naive Notation", () => expect(() => divideBy(1, 0)).to.throw);
  // it("Correct Notation", () => expect(() => divideBy(1, 0)).to.throw());
  // it("Explicit Notation", () =>
  //   expect(() => divideBy(1, 0)).to.throw("Division by 0 is Invalid!"));
  // it("Result Expression", () => expect(divideBy(0,1)).equals(0));
  // it("Integer Division", () => expect(divideBy(4,2)).equals(2));
});
