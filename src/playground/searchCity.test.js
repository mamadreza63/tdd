import { cities, searchCity } from './searchCity';

describe("Search city result", () => {
    it.each([
      ['t', null],
      ['', null],
      ['Va', ['Valencia', 'Vancouver']],
      ['va', []],
      ['ape', ['Budapest']],
      ['*', cities],
    ])("when the input is '%s'", (city, expected) => {
      expect(searchCity(city)).toStrictEqual(expected);
    });
});