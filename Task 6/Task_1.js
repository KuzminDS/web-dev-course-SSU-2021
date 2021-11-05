function convertToFlatArray(arrays) {
	let flatArray = [];
    for (const item of arrays) {
    	flatArray.push(...item);
    }
    return flatArray.sort()
}

console.log(convertToFlatArray([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]))
console.log(convertToFlatArray([]))
console.log(convertToFlatArray([[], []]))
console.log(convertToFlatArray([[], [1]]))
console.log(convertToFlatArray([[1, 3, 5], [-100], [2, 4, 6]]))