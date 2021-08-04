// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/find-the-symmetric-difference

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
