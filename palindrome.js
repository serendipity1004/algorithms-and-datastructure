function palindrome0(input) {
    let rev = '';

    for (let char of input) {
        rev = char + rev;
    }

    return rev === input;
}

function palindrome1(input){
    return input.split('').reduce((acc, char) => char + acc, '') === input;
}

function palindrome2(input){
    return input.split('').every((char, index) => char === (input[input.length - 1 - index]));
}

module.exports = [palindrome0, palindrome1, palindrome2];