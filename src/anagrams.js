function anagram(string1, string2){
    let stringMap1 = {};
    let stringMap2 = {};

    for(let char of string1.toLowerCase()){
        if(char === ' '){
            continue;
        }

        if(stringMap1[char] === undefined){
            stringMap1[char] = 0;
        }else{
            stringMap1[char] = stringMap1[char] + 1;
        }
    }

    for(let char of string2.toLowerCase()){
        if(char === ' '){
            continue;
        }

        if(stringMap2[char] === undefined){
            stringMap2[char] = 0;
        }else{
            stringMap2[char] = stringMap2[char] + 1;
        }
    }

    let keys1 = Object.keys(stringMap1);
    let keys2 = Object.keys(stringMap2);

    if(keys1.length !== keys2.length){
        return false;
    }

    for(let key of keys1){
        if(stringMap1[key] !== stringMap2[key]){
            return false;
        }
    }

    return true;
}

function anagram2 (string1, string2){

    if(string1.length !== string2.length){
        return false;
    }

    function countChar(string, target){
        let count = 0;

        for(let char of string){
            if(char === ' '){
                continue;
            }
            if(char === target){
                count ++;
            }
        }

        return count;
    }

    let dupMap = {};

    for(let char in string1.toLowerCase()){
        if(!dupMap[char]){
            continue;
        }

        if(countChar(string1.toLowerCase(), char) !== countChar(string2.toLowerCase(), char)){
            return false;
        }

        dupMap[char] = true;
    }

    return true;

}

function anagram3 (string1, string2) {
    function rearrange(string) {
        return string.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    }

    return rearrange(string1) === rearrange(string2);
}

module.exports = [
    anagram,
    anagram2,
    anagram3
];