function getFormula(n) {
    var formula = "";
	var isNegativeDegree = false;
	if(!Number.isInteger(n) || n < -200 || n > 200)
		return "Invalid input";
	if (n == 0)
	    return "1"
	else if (n < 0) {
		formula += "1/("
		isNegativeDegree = true
		n *= -1
	}
	for (var i = n; i >= 0; i--) {
		var formula =  formula + getCoefficient(BigInt(n), BigInt(n - i)).toString() + getVariables(n, i).toString() + (i == 0 ? "" : "+") + (isNegativeDegree && i == 0 ? ")" : "")
	}
	return formula
}

function getCoefficient(n, k) {
	var coefficient = factorial(n) / (factorial(k) * factorial(n - k))
	return coefficient == 1 ? "" : coefficient;
}

function factorial(n) {
    return n ? n * factorial(n - 1n) : 1n
}

function getVariables(n, i) {
	var j = n - i
	var partA = ""
	var partB = ""
    
    switch(i) {
        case 0:
            partA = ""
            break
        case 1:
            partA = "a"
            break
        default:
            partA = `a^${i}`
            break
    }

    switch(j) {
        case 0:
            partB = ""
            break
        case 1:
            partB = "b"
            break
        default:
            partB = `b^${j}`
            break
    }

	return partA + partB
}

console.log(getFormula(0))
console.log(getFormula(1))
console.log(getFormula(2))
console.log(getFormula(-2))
console.log(getFormula(3))
console.log(getFormula(5))
console.log(getFormula(201))
console.log(getFormula(3.14))