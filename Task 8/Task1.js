console.log(generatePassword())

function generatePassword() {
    let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    let lowerLetters = "abcdefghijklmnopqrstuvwxyz";
    let upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passwordLength = randomInteger(6, 20);
    let password = "";
    for (var i = 0; i <= passwordLength; i++) {
        let randomIndex = randomInteger(0, chars.length - 1);
        password += chars[randomIndex];
    }
    while (!containsAtLeastOne(password, numbers) || !containsAtLeastOne(password, lowerLetters) || !containsAtLeastOne(password, upperLetters)) {
        if (!containsAtLeastOne(password, numbers)) {
            insertOneElement(password, numbers);
        }
        if (!containsAtLeastOne(password, lowerLetters)) {
            insertOneElement(password, lowerLetters);
        }
        if (!containsAtLeastOne(password, upperLetters)) {
            insertOneElement(password, upperLetters);
        }
    }

    return password;
}

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.floor(rand);
}

function containsAtLeastOne(str, elements) {
    for (var i = 0; i <= elements.length; i++) {
        if (str.indexOf(elements[i]) !== -1) {
            return true;
        }
    }
    return false;
}

function insertOneElement(str, elements) {
    let strIndex = randomInteger(0, str.length - 1);
    let elementsIndex = randomInteger(0, elements.length - 1);
    str[strIndex] = elements[elementsIndex];
}