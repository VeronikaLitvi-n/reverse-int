module.exports = function reverse (n) {
    num = Math.abs(n)
    let reverseNum = +num.toFixed(0).split('').reverse().join('')

    return reverseNum
}


