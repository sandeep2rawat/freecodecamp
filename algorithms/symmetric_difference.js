/*
https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/find-the-symmetric-difference

The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both.
For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.
Symmetric difference is a binary operation, which means it operates on only two elements.
So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time.
Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

Create a function that takes two or more arrays and returns an array of their symmetric difference.
The returned array must contain only unique values (no duplicates).
*/

function diff(arr1, arr2) {
    let res = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) == -1 && res.indexOf(arr1[i]) == -1) {
            res.push(arr1[i]);
        }
    }
    return res;
}

function sym_diff(arr1, arr2) {
    let diff1 = diff(arr1, arr2);
    let diff2 = diff(arr2, arr1);
    return diff1.concat(diff2);
}

function sym(...args) {
    return args.reduce(sym_diff);
}

let s = sym([1, 2, 3], [5, 2, 1, 4]);
console.log(s)
