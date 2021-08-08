var number =20

for (var i=1; i<=number;i++){
    if(i%3==0 && i%5==0){
        console.log("AmiTumi")
    }

    else if(i%3==0){
        console.log("Ami");
    }
    else if(i%5==0){
        console.log("Tumi");
    }
    else{
        console.log(i)
    }
}