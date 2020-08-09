//Objective is to reorganize a string such that no two adjacent indices
//have the same characters

let S = 'aab'


//O(n) solution where n is the length of the string

let charArr = new Array(26).fill(0)
for (let i = 0; i < S.length; i++) {
    charArr[S.charCodeAt(i) - 97]++
}

let max = 0
let maxLetter = 0
for (let i = 0; i < charArr.length; i++) {
    if (charArr[i] > max) {
        max = charArr[i]
        maxLetter = i
    }
}

//If we can't fit the max number of characters into half of the array size
//(since we are skipping every other index)
//Ex. 'aaab' -> ['a', 'b', 'a', <undefined>, 'a']
if (max > (S.length + 1) / 2) {
    return ''
}

let result = new Array(S.length)
let index = 0
while (charArr[maxLetter] > 0) {
    result[index] = String.fromCharCode(97 + maxLetter)
    index += 2
    charArr[maxLetter]--
}

for (let i = 0; i < charArr.length; i++) {
    while (charArr[i] > 0) {
        if (index >= result.length) {
            index = 1
        }
        
        result[index] = String.fromCharCode(97 + i)
        index += 2
        charArr[i]--
    }
}

return result.join('')