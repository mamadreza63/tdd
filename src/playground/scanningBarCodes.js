const Barcodebar = {
    '': 'Error: empty barcode',
    '12345': '$7.25',
    '23456': '$12.50'
}

const totalCommand = (input) => input.includes('total')
    ? '$' + input.substring(input.indexOf("(") + 1, input.lastIndexOf(")"))
            .split(',')
            .reduce((acc, key) => acc + +Barcodebar[key.replace(/\s/g, '')].slice(1), 0)
    : undefined

export const scanner = (input) => {
    const totalCommandSell = totalCommand(input);
    return totalCommandSell || Barcodebar[input] || 'Error: barcode not found';
}