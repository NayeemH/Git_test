function factorial(number){
    if (number==0){
        return 1;
    }
    else if(number > 0){
        return number * factorial(number-1)
    }
}

var fact = factorial(5);
console.log(fact);