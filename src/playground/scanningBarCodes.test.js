import { scanner } from './scanningBarCodes';

describe("Scanning bar codes to sell products", () => {
    it.each([
      ['12345', '$7.25'],
      ['23456', '$12.50'],
      ['99999', 'Error: barcode not found'],
      ['', 'Error: empty barcode'],
      ['total(12345, 23456)', '$19.75'],
    ])("when the input is '%s'", (barcode, expected) => {
      expect(scanner(barcode)).toStrictEqual(expected);
    });
});