import { FizzBuzz } from "./fizbuzz";

it('FizzBuzz should return string', () => {
    const result = FizzBuzz(2);
    expect(typeof result).toBe("string");
})

describe("FizzBuzz", () => {
    it.each([
      [1, "1"],
      [2, "2"],
      [3, "Fizz"],
      [6, "Fizz"],
      [5, "Buzz"],
      [10, "Buzz"],
      [15, "FizzBuzz"],
      [30, "FizzBuzz"]
    ])("when the input is '%s'", (inputNum, expected) => {
      expect(FizzBuzz(inputNum)).toBe(expected);
    });
});
