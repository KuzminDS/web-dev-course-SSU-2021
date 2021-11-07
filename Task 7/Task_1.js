function convertToPhoneNumberFormat(numbersArray) {
	var errorMessage = "Invalid input"
	if (!Array.isArray(numbersArray) || numbersArray.length != 10)
		return errorMessage
	for (var number of numbersArray) {
		if(!Number.isInteger(number) || number < 0 || number > 9)
			return errorMessage
	}
	var numbersString = numbersArray.join('')
	return "+7 (" + numbersString.slice(0,3) + ") " + numbersString.slice(3,6) + "-" + numbersString.slice(6,8) + "-" + numbersString.slice(8,10)
}

console.log(convertToPhoneNumberFormat([9, 0, 0, 1, 1, 1, 2, 2, 3, 3]))
console.log(convertToPhoneNumberFormat([9, 2, 7, 5, 5, 5, 6, 6, 9, 0]))
console.log(convertToPhoneNumberFormat([1, 2, 3, 4, 5, 6, 7, 8, 9, -11]))
console.log(convertToPhoneNumberFormat([]))
console.log(convertToPhoneNumberFormat("aw93fha="))