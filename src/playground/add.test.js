import { add } from './add'

test('returns int for inputs string', ()=>{
    expect(typeof add("")).toBe("number")
})

describe("calculator", () => {
    it.each([
      ['', 0],
      ['1', 1],
      ['1,2', 3],
      ['2,3', 5],
      ['2,3,4', 9],
      ['1\n6,11', 18],
      ['//;\n1;3', 4],
      ['//|\n1|2|3', 6],
      ['//sep\n2sep5', 7],
      ['2, 1001', 2],
      ['2, 1000', 1002]
    ])("when the input is '%s'", (inputString, expected) => {
      expect(add(inputString)).toBe(expected);
    });
});

describe("calculator error", () => {
    it.each([
      ['5\n15,', 'error'],
      ['5\n15\n', 'error'],
      ['//;\n1;3;', 'error'],
      ['//sep\n2sep', 'error'],
      ['//|\n1|2,3', '"|" expected but "," found at position 3.'],
      ['//|\n1|2|3,7', '"|" expected but "," found at position 5.'],
      ['//|\n1|2|7;8', '"|" expected but ";" found at position 5.'],
      ['//;\n4|12;7|1', '";" expected but "|" found at position 1.'],
      ['1,-2', 'Negative number(s) not allowed: -2'],
      ['10,-5', 'Negative number(s) not allowed: -5'],
      ['2,-4,-9', 'Negative number(s) not allowed: -4, -9'],
      ['//|\n-1|2,3', 'Negative number(s) not allowed: -1\n"|" expected but "," found at position 4.'],
      ['//|\n1|2,-3', 'Negative number(s) not allowed: -3\n"|" expected but "," found at position 3.'],
      ['//|\n-1|2,-3', 'Negative number(s) not allowed: -1, -3\n"|" expected but "," found at position 4.'],
    ])("when the input is '%s'", (inputString, expected) => {
      expect(()=> add(inputString)).toThrow(expected);
    });
});