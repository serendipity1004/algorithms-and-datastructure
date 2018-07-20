function chunk(array, size){
    let result = [];
    let chunkedArr = [];

    for(let i = 0; i < array.length; i++){
        chunkedArr.push(array[i]);

        if(((i + 1) % size === 0 && i !== 0) || i === array.length - 1){
            result.push(chunkedArr);
            chunkedArr = [];
        }
    }

    return result;
}

function chunk2 (array, size){
    let result = [];

    for(let element of array){
        let builderArr = result[result.length - 1];

        if(!builderArr || builderArr.length === size){
            result.push([element])
        }else{
            builderArr.push(element);
        }
    }

    return result;
}

function chunk3 (array, size){
    let result = [];
    let index = 0;

    while(index < array.length){
        result.push(array.slice(index, index > array.length - 1 ? array.length : index + size));

        index += size;
    }

    return result;
}

module.exports = [
    chunk,
    chunk2,
    chunk3
];