/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const match = ['(',')','[',']','{','}'];
    let open = '';

    for (let i = 0; i < s.length; i++) {
        if (match.indexOf(s[i]) % 2 === 0) {
            open += s[i];
        } else if (open[open.length - 1] === match[match.indexOf(s[i]) - 1]) {
            open = open.substring(0, open.length - 1);
        } else {
            return false;
        }
    }

    return open === '';
};

console.log(isValid("()[]{}"));