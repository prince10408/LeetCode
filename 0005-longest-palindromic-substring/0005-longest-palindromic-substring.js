/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let n = s.length;
    let dp = Array(n).fill().map(() => Array(n).fill(false));
    let longestPalindrome = "";

    // Base case: single characters are always palindromes
    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
        longestPalindrome = s[i];
    }

    // Check for palindromes of length 2
    for (let i = 0; i < n - 1; i++) {
        if (s[i] === s[i+1]) {
            dp[i][i+1] = true;
            longestPalindrome = s.substring(i, i+2);
        }
    }

    // Check for palindromes of length greater than 2
    for (let len = 3; len <= n; len++) {
        for (let i = 0; i < n - len + 1; i++) {
            let j = i + len - 1;
            if (s[i] === s[j] && dp[i+1][j-1]) {
                dp[i][j] = true;
                if (len > longestPalindrome.length) {
                    longestPalindrome = s.substring(i, j+1);
                }
            }
        }
    }

    return longestPalindrome;
};