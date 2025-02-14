/* Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s. Specifically:

Each letter in pattern maps to exactly one unique word in s.
Each unique word in s maps to exactly one letter in pattern.
No two letters map to the same word, and no two words map to the same letter.

Example 1:

Input: pattern = "abba", s = "dog cat cat dog"

Output: true

Explanation:

The bijection can be established as:

'a' maps to "dog".
'b' maps to "cat".
Example 2:

Input: pattern = "abba", s = "dog cat cat fish"

Output: false

Example 3:

Input: pattern = "aaaa", s = "dog cat cat dog"

Output: false
*/

var wordPattern = function (pattern, s) {
    sArr = s.split(' ')
    if (pattern.length !== sArr.length) return false
    const kMap = {} // key map
    const vMap = {} // value map

    for (let i = 0; i < pattern.length; i++) {

        const key = pattern[i] // letter at index i in pattern
        const value = sArr[i] // word at index i in s 

        // if key or value already exists and does not correspond to
        // eachother, return false because we don't have a valid pattern
        if (key in kMap || value in vMap) {
            if (kMap[key] !== value) return false
            if (vMap[value] !== key) return false
        } else {
            kMap[key] = value
            vMap[value] = key
        }
    }

    return true // pattern is valid
};