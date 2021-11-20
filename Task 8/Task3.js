console.log(seven(times(five())))
console.log(four(plus(nine())))
console.log(eight(minus(three())))
console.log(six(dividedBy(two())))
console.log(eight(dividedBy(three())))
console.log(three(times(three(times(three())))))
console.log(two(plus(two(times(two(minus(one())))))))
console.log(zero(plus(one(dividedBy(one())))))
console.log(one(dividedBy(zero())))
console.log(one())

var errorMessage = "wrong input";

function zero(expression = ''){
	if(expression === errorMessage) return errorMessage;
	return calculateExpression(expression, 0);
}

function one(expression = ''){
	if(expression === errorMessage) return errorMessage;
	return calculateExpression(expression, 1);
}

function two(expression = ''){
	if(expression === errorMessage) return errorMessage;
	return calculateExpression(expression, 2);
}

function three(expression = ''){
	if(expression === errorMessage) return errorMessage;
	return calculateExpression(expression, 3);
}

function four(expression = ''){
	if(expression === errorMessage) return errorMessage;
	return calculateExpression(expression, 4);
}

function five(expression = ''){
	if(expression === errorMessage) return errorMessage;
	return calculateExpression(expression, 5);
}

function six(expression = ''){
    if(expression === errorMessage) return errorMessage;
	return calculateExpression(expression, 6);
}

function seven(expression = ''){
	if(expression === errorMessage) return errorMessage;
	return calculateExpression(expression, 7);
}

function eight(expression = ''){
    if(expression === errorMessage) return errorMessage;
	return calculateExpression(expression, 8);
}

function nine(expression = ''){
    if(expression === errorMessage) return errorMessage;
	return calculateExpression(expression, 9);
}

function plus(expression = ''){
	return action(expression, '+');
}

function minus(expression){
	return action(expression, '-');
}

function times(expression){
	return action(expression, '*');
}

function dividedBy(expression){
    return action(expression, '/');
}

function action(expression, sign) {
    if(expression === errorMessage) return errorMessage;
	if(isCalculationSign(expression[0])) {
		return errorMessage;
	}
    else {
		return sign + expression;
	}
}

function isCalculationSign(symbol){
	if(symbol == "+" || symbol == "-" || symbol == "*" || symbol == "/") {
		return true;
	}
	return false;
}

function calculate(previous, current, sign)
{
	if(sign == "+") {
		return (current + previous).toString();
	}
    else if(sign == "-") {
		return (current - previous).toString();
	}
    else if (sign == "*") {
		return (current * previous).toString();
	}
    else if (sign == "/") {
		if (current/previous === Number.POSITIVE_INFINITY){
			return (Number.POSITIVE_INFINITY).toString();
		}
		return parseInt((current / previous)).toString();
	}
    else {
		return errorMessage;
	}
}

function calculateExpression(expression, current){
	if(isCalculationSign(expression[0])) {
		let arr = expression.split(/\+|\-|\*|\//);
		return calculate(Number(arr[1]), Number(current), expression[0]).toString();
	}
    else {
		return current.toString();
	}
}