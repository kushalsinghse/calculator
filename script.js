function any(i) {
var x=i;
if (x==='=') {
	document.getElementById('ans').value=eval(document.getElementById('ans').value)
} 

else if(x==='clear'){
	document.getElementById('ans').value=''

}

	else {
		 document.getElementById('ans').value+=i;
	}

}