function convertToBinaryWord(word){
	return word.split('').map(symbol => {
		return symbol.charCodeAt(0).toString(2).padStart(8, '0')
	})
}

console.log(convertToBinaryWord("man"))
console.log(convertToBinaryWord("AB"))
console.log(convertToBinaryWord("wecking"))
console.log(convertToBinaryWord("Ruby"))
console.log(convertToBinaryWord("Yosemite"))