function count(number){
    console.log(number);
    const newNumber = number - 1;
    if(newNumber > 0){
        count(newNumber);
    }
}

count(5)