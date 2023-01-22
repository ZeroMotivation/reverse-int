module.exports = function reverse (n) {
    const digits = String(n).split('');
    return parseInt(digits.reverse().join(''))
}
