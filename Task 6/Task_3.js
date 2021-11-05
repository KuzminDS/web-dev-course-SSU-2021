function getVowelsCount(text){
	return  [...text].reduce((a, b) => a + "aeiouAEIOU".includes(b), 0);
}

console.log(getVowelsCount('abracadabra'))
console.log(getVowelsCount('ABRACADABRA'))
console.log(getVowelsCount('o a kak ushakov lil vo kashu kakao'))
console.log(getVowelsCount('my pyx'))
