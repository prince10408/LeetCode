/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
	return s.match(new RegExp(p)) ? s === s.match(new RegExp(p))[0] : false
};