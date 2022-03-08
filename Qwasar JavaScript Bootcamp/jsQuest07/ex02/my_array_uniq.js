function my_array_uniq(param_1) {

     getUniqueValues = param_1.filter((currentValue, index, arr) =>(
            arr.indexOf(currentValue) === index))
        return getUniqueValues
}

// console.log(my_array_uniq([1, 1, 1, 2, 3, 4, 1]))