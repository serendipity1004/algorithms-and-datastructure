function maxChar0(input) {
    let counts = {};

    for(let char of input){
        if(counts[char] === undefined){
            counts[char] = 0;
        }else {
            counts[char] = counts[char] + 1
        }
    }

    let largest;

    for(let count of Object.keys(counts)){
        if(largest === undefined){
            largest = {name:count, count:counts[count]};
        }else if(largest.count < counts[count]){
            largest = {name: count, count: counts[count]};
        }
    }

    return largest.name;
}

module.exports = [maxChar0];