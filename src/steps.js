function step(number) {

    let result = '';

    for(let i = 0; i < number; i++){
        let builder = '';

        for(let j = 0; j < number; j++){
            if(j <= i){
                builder += '#'
            }else{
                builder += '@'
            }
        }

        result += builder;

        if(i !== number - 1){
            result += '\n'
        }
    }

    return result;
}

module.exports = [
    step
];