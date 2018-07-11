function fizzBuzz0(number) {

    let str = '';

    for (let i = 0; i < number; i++) {
        let pass = false;

        if ((i + 1) % 3 === 0) {
            str += 'fizz';
            pass = true;
        }

        if ((i + 1) % 5 === 0) {
            str += 'buzz';
            pass = true;
        }

        if (pass === false) {
            str += i + 1;
        }
    }

    return str;
}

function fizzBuzz1(number, str = '', cur = 1) {
    if (cur > number) {
        return str;
    }

    if (cur % 15 === 0) {

        return fizzBuzz1(number, str += 'fizzbuzz', cur+=1);

    } else if (cur % 3 === 0) {

        return fizzBuzz1(number, str += 'fizz', cur+=1);

    } else if (cur % 5 === 0) {

        return fizzBuzz1(number, str += 'buzz', cur+=1);

    }else{

        return fizzBuzz1(number, str += cur, cur+=1);

    }
}

module.exports = [fizzBuzz0, fizzBuzz1];