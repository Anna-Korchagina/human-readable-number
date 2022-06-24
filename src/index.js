module.exports = function toReadable(number) {
    const numberString = String(number);
    const digitArray = [...numberString];
    let digitNumber = digitArray.length;
    return getDigit(digitArray, digitNumber);
};

function getDigit(digitArray, digitNumber) {

    switch (digitNumber) {
        case 1:
            return getUnit(Number(digitArray[0]));
        case 2:
            return checkDozen(digitArray, 0, 1);
        case 3:
            let fre = getFivescore(getUnit(Number(digitArray[0])));
            let pre = checkDozen(digitArray, 1, 2);
            if(pre !== undefined){
                return `${fre} ${pre}`;
            } else {
                return fre;
            }
        default:
            return undefined;
    }
}

function checkDozen(digitArray, firstNum, secondNum) {
    let dozenPreliminaryF = getUnit(Number(digitArray[firstNum]));
    let dozenPreliminaryS = getUnit(Number(digitArray[secondNum]));
    if (dozenPreliminaryF === 'one') {
        return getDozenOne(getUnit(Number(digitArray[secondNum])));
    } else if (dozenPreliminaryS === 'zero'){
        return getDozen(dozenPreliminaryF);
    } else {
        return (dozenPreliminaryF !== 'zero') ? `${getDozen(dozenPreliminaryF)} ${dozenPreliminaryS}` : dozenPreliminaryS;
    }
}

function getUnit(digit) {

    switch (digit) {
        case 0:
            return 'zero';
        case 1:
            return 'one';
        case 2:
            return 'two';
        case 3:
            return 'three';
        case 4:
            return 'four';
        case 5:
            return 'five';
        case 6:
            return 'six';
        case 7:
            return 'seven';
        case 8:
            return 'eight';
        case 9:
            return 'nine';
        default:
            return undefined;
    }
}

function getDozen(digit) {

    switch (digit) {
        case 'two':
            return 'twenty';
        case 'three':
            return 'thirty';
        case 'four':
            return 'forty';
        case 'five':
            return 'fifty';
        case 'six':
            return 'sixty';
        case 'seven':
            return 'seventy';
        case 'eight':
            return 'eighty';
        case 'nine':
            return 'ninety';
        default:
            return undefined;
    }
}

function getDozenOne(num) {
    switch (num) {
        case 'zero':
            return 'ten';
        case 'one':
            return 'eleven';
        case 'two':
            return 'twelve';
        case 'three':
            return 'thirteen';
        case 'four':
            return 'fourteen';
        case 'five':
            return 'fifteen';
        case 'six':
            return 'sixteen';
        case 'seven':
            return 'seventeen';
        case 'eight':
            return 'eighteen';
        case 'nine':
            return 'nineteen';
        default:
            return undefined;
    }
}

function getFivescore(digit) {

    if (!undefined) {
        return `${digit} hundred`;
    } else {
        return undefined;
    }

}
