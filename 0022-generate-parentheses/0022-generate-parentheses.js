/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];
    generateParentheses(result, '', 0, 0, n);
    return result;
};

const generateParentheses = (result, current, open, close, n) => {
    if (current.length === 2 * n) {
        result.push(current);
        return;
    }
    if (open < n) {
        generateParentheses(result, current + '(', open + 1, close, n);
    }
    if (close < open) {
        generateParentheses(result, current + ')', open, close + 1, n);
    }
};