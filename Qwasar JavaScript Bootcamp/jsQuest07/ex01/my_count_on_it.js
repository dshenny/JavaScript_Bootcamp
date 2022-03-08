function my_count_on_it(param_1) {

    index =0;

    while (index < param_1.length) {
        param_1[index] = param_1[index].length;
        index += 1;
    }
    return param_1;
}

// console.log(my_count_on_it(["aBc", "AbcE Fgef1"]));
// console.log(my_count_on_it(["This", "is", "the", "way"]));
// console.log(my_count_on_it(["aBc"]));
