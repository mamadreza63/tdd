
const validatePasswordType = (password) => typeof password !== 'string' ? 'Password must be string' : undefined
const validatePasswordLength = (password) => password.length < 8 ? 'Password must be at least 8 characters' : undefined
const validatePasswordDigits = (password) => [...password].filter(i => !isNaN(i)).length < 2 ? 'The password must contain at least 2 numbers' : undefined
const validatePasswordCapitalLetter = (password) => [...password].filter(i => i.match(/[a-z]/i) && i === i.toUpperCase()).length < 1 ? 'password must contain at least one capital letter' : undefined
const validatePasswordSpecialCharacter = (password) => [...password].filter(i => i.match(/[^a-z0-9]/i)).length < 1 ? 'password must contain at least one special character' : undefined

export const validatePassword = (password) => {
    const validators = [validatePasswordLength, validatePasswordDigits, validatePasswordCapitalLetter, validatePasswordSpecialCharacter];
    const typePasssword = validatePasswordType(password);
    if (typePasssword) return {isValid: false, error: typePasssword};
    const result = validators
        .map(validator => validator(password))
        .filter(Boolean)
    return result.length ? {isValid: false, error: result.join('\n')} : { isValid: true }
}