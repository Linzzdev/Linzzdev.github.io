function isPalindrome(str){
    str= str.toLowerCase();
    for(let i =0; i< str.lenght/2; i ++){
        if(str[i] !== str[str.lenght -1 -i]){
            return false;
        }
    }
return true;
}

function arrayMaxMin(arr){
    let valorMax=0;
    let valorMin=0;

    for(let i = 0; i < arr.length; i++){
        if(valorMin==0 || arr[i] < valorMin){
            valorMin= arr[i];
        }
        if(arr[i]> valorMax){
            valorMax= arr[i];
        }
        console.log(arr[i])
    }
    return[valorMin,valorMax]
}
    
