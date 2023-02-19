const parse = (input) => {
    const hasCustomSeprator = input.includes('//');
    const seprators =  hasCustomSeprator ? [input.split('\n')[0].slice(2)] : [',', '\n'];
    const numbers = hasCustomSeprator ? input.split('\n')[1]: input;
    return {seprators, numbers}
}

const tokenize = (seprators, numbers) => seprators
    .reduce((acc, seprator) => acc.flatMap((nums)=>nums.split(seprator)),[numbers])

const isValid = (seprators, numbers) => seprators.every(seprator => numbers.slice(-seprator.length) !== seprator)

const validateTokens = (tokens, numbers, seprators) => {
    const errors = []
    const negativeNumbers = tokens.filter(token => token < 0)
    const nan = tokens.find(token => isNaN(token))
    if(nan){
        const badSeprator = nan[nan.search(/[^0-9]/)]
        const indexError = numbers.indexOf(badSeprator)
        nan.split(badSeprator).filter(item => item < 0).forEach(i => negativeNumbers.push(i))
        errors.push(`"${seprators[0]}" expected but "${badSeprator}" found at position ${indexError}.`)
    }
    if (negativeNumbers.length) errors.push(`Negative number(s) not allowed: ${negativeNumbers.join(', ')}`)
    errors.reverse()
    if (errors.length) throw errors.join('\n')
};

const sum = (tokens) => tokens.filter(value => value <= 1000).reduce((sum, value) => sum + +value, 0)

export const add = (input) => {
    const { seprators, numbers } = parse(input);
    if (!isValid(seprators, numbers)) throw 'error'
    const tokens = tokenize(seprators, numbers)
    validateTokens(tokens, numbers, seprators)
    return sum(tokens)
}
