function containsOnlyUniqueSymbols(text) {
	let letters = text.toLowerCase().split('')
    return letters.every((letter, index) => index == letters.indexOf(letter));
}

console.log(containsOnlyUniqueSymbols("Dermatoglyphics"))
console.log(containsOnlyUniqueSymbols("aba"))
console.log(containsOnlyUniqueSymbols("moOse"))
console.log(containsOnlyUniqueSymbols(""))