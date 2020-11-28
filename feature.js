function printHill(lines){
	for (let i=0; i<=lines; i++){
		console.log("#".repeat(i));
	}
}
printHill(5);
function threeWords(text) {
    let arr = text.split(' ');
    let res=0;
    for(let i=0; i<arr.length;i++){
    	if(arr[i].match(/[a-zA-Z]/)){
	        res++;
	        } else
	    if(res>=3){return true} else{res=0}
    }
    if(res>=3){
    	return true;
    }  else{ return false}
}
console.log(threeWords("He is 123 man"));