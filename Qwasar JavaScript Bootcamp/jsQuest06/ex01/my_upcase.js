function my_upcase(param_1) {
    var index = 0;
    while (index < param_1.length) {
      //console.log(param_1[index]);
      if (param_1[index] == param_1[index].toLowerCase()) {
        // param_1[index] = param_1[index].toUpperCase()
       param_1 = param_1.replace(param_1[index], param_1[index].toUpperCase());
      }
      index += 1;
    }
    return (param_1);
  }
  
//  console.log(my_upcase("aBc"))