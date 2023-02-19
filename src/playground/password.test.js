import { validatePassword } from "./password";

it('input result should contain a boolean indicate', () => {
    const result = validatePassword('aaa');
    expect(typeof result.isValid).toBe('boolean');
})

describe('passwords validator', () => {
    it.each([
        ['abcD!', "Password must be at least 8 characters\nThe password must contain at least 2 numbers"],
        ['aaa79aa', "Password must be at least 8 characters\npassword must contain at least one capital letter\npassword must contain at least one special character"],
        ['abcdefg#', "The password must contain at least 2 numbers\npassword must contain at least one capital letter"],
        [1231, "Password must be string"],
        [12345678, "Password must be string"],
        ['aaabbBcc$', "The password must contain at least 2 numbers"],
        ['aaabbbdD&*', "The password must contain at least 2 numbers"],
        ['ab@cdefgh', "The password must contain at least 2 numbers\npassword must contain at least one capital letter"],
        ['pa*ss@', "Password must be at least 8 characters\nThe password must contain at least 2 numbers\npassword must contain at least one capital letter"],
        ['p#assword12', "password must contain at least one capital letter"],
        ['passworD12', "password must contain at least one special character"],
      ])("invalid password for '%s' expecting error: '%s'", (inputPassword, error) => {
        const actual = validatePassword(inputPassword);
        expect(actual.isValid).toBe(false);
        expect(actual.error).toBe(error);
      });
    
      it.each([
        ['ab3cde5fG!']
      ])("valid password for '%s'", (inputPassword) => {
        const actual = validatePassword(inputPassword);
        expect(actual.isValid).toBe(true);
        expect(actual.error).toBe(undefined);
      });
})