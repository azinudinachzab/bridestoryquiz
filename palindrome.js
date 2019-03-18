function check_palindrome(value){
	value = value.toLowerCase();
	var rev= value.split('').reverse('').join('');
	if(rev===value){
		window.alert("Palindrome");
	}
	else{
		window.alert("Not Palindrome");
	}
}

function klik(){
	var kata = document.getElementById("demo").value;
	check_palindrome(kata);
}
