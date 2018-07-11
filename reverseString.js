function reverse0(input) {

    let str = input.split('');
    let swap;

    for (let i = 0; i < str.length / 2; i++) {
        swap = str[i];
        str[i] = str[str.length - 1 - i];
        str[str.length - 1 - i] = swap;
    }

    return str.join('');
}

function reverse1(input) {
    let newStr = '';

    for (let char of input) {
        newStr = char + newStr;
    }

    return newStr
}

function reverse2(input) {
    return input.split('').reduce((reversed, character) => character + reversed, '');
}

module.exports = [reverse0, reverse1, reverse2];