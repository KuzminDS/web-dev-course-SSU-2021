function getTablePicture(m, n, message) {
	var errorMessage = "Invalid input"
	if (!Number.isInteger(n) || !Number.isInteger(m))
		return errorMessage
	if (m <= 0 || n <= 0)
		return errorMessage
	if (m * n < message.length)
		return errorMessage
	var table = ""
	var filledLetterCount = 0
	for (var i = 0; i < m; i++) {
		var letters = ""
		if (filledLetterCount <= message.length - 1)
			letters = message.substring(filledLetterCount, filledLetterCount + n)
		else
			letters = " ".repeat(n)
        filledLetterCount += n
		table += getEmptyRow(n) + "\n" + getFilledRow(letters) + "\n"
	}
	table = table + getEmptyRow(n)
	return table
}

function getEmptyRow(length) {
	var row = "+"
	for (var i = 0; i < length; i++) {
        row = row + "---+"
	} 
	return row
}

function getFilledRow(letters) {
	var row = "|"
	for (var i = 0; i < letters.length; i++) {
		row = row + " " + letters[i] + " |" 
	}
	return row
}

console.log(getTablePicture(4, 4, "Hello World!"))
console.log(getTablePicture(4, 3, "Nice pattern"))
console.log(getTablePicture(3, 4, "Nice pattern"))