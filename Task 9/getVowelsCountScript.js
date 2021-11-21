function getVowels() {
    var input = document.getElementById("getVowelsInput").value;
    document.getElementById("getVowelsResult").innerHTML = getVowelsCount(input).toString();
}

function resetVowelsField() {
    document.getElementById("getVowelsInput").value = "";
    document.getElementById("getVowelsResult").innerHTML = "";
}

function getVowelsCount(text){
	return  [...text].reduce((a, b) => a + "aeiouAEIOU".includes(b), 0);
}
