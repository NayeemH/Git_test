var str='abacddbecefgfgz'

function find_NonRepet(str){
    var strSplit = str.split('');
    var result = '';
    var counter=0;

    for(var i =0; i<strSplit.length; i++){
        counter = 0;
        for (var j =0; j<strSplit.length;j++){
            if(strSplit[i]===strSplit[j]){
                counter+=1;
            }
        }
        if(counter<2){
            result = strSplit[i]
            break;
        }
    }
    return result;
}

console.log(find_NonRepet(str))