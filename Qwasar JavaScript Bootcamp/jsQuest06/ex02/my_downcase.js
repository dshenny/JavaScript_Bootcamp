function my_downcase (param_1) {
    index = 0;
    while (index < param_1.length) {
        if (param_1[index] === param_1[index].toUpperCase()) {
            param_1 = param_1.replace(param_1[index] , param_1[index].toLowerCase());
        }
        index += 1;
    }
    return (param_1); 
}

// console.log(my_downcase("aBc"))