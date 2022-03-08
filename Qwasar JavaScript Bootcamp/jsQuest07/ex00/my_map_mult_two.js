function my_map_mult_two(param_1) {
    index = 0;
    
    while (index < param_1.length ) {
        param_1[index] = 2 * param_1[index];
        index +=1;
    }
     return param_1;
}

//console.log(my_map_mult_two([1, 2, 3, 4, 5]))