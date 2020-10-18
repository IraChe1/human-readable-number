module.exports = function toReadable(num) {
    let units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let decades = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let numString = num.toString();

    if (num < 0) throw new Error('Negative numbers are not supported.');

    if (num === 0) return 'zero';

    if (num < 20) {
        return units[num];
    }

    if (numString.length === 2) {
        if (numString[1] == 0) return decades[numString[0]].trim();
        return (decades[numString[0]] + ' ' + units[numString[1]]).trim();
    }

    if (numString.length == 3) {
        if (numString[1] === '0' && numString[2] === '0')
            return units[numString[0]] + ' hundred';
        else
            return units[numString[0]] + ' hundred ' + toReadable(+(numString[1] + numString[2])).trim();
    }

    if (numString.length === 4) {
        let end = +(numString[1] + numString[2] + numString[3]);
        if (end === 0) return units[numString[0]] + ' thousand';
        if (end < 100) return units[numString[0]] + ' thousand ' + toReadable(end);
        return units[numString[0]] + ' thousand ' + toReadable(end);
    }
}