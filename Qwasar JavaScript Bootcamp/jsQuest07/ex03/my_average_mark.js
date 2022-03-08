function my_average_mark(param_1) {
    sum = 0;
    count = 0;
    
    for(index = 0; index < param_1.length; index++) {
        sum += param_1[index].integer;
        ++count;
    }
    return number = Math.round(10*(sum / count))/10
}
    

// console.log(my_average_mark([{"string": "Quentin", "integer": 1},
// {"string": "Fred", "integer": 1},
// {"string": "Julia", "integer": 18},
// {"string": "stephanie", "integer": 13}]))

