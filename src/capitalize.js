function capitalize(string) {
    let words = string.split(' ');

    for (let i = 0; i < words.length; i++) {
        let chars = words[i].split('');

        chars[0] = chars[0].toUpperCase();

        words[i] = chars.join('');
    }

    return words.join(' ');
}

function capitalize1(string){
    let result = string[0].toUpperCase();

    for(let i =1; i < string.length; i++) {
        if (string[i - 1] === ' ') {
            result += string[i].toUpperCase();
        } else {
            result += string[i];
        }
    }

    return result;
}

module.exports = [
    capitalize,
    capitalize1
];