/*
https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-selection-sort

Here we will implement selection sort. Selection sort works by selecting the minimum value in a
list and swapping it with the first value in the list. It then starts at the second position,
selects the smallest value in the remaining list, and swaps it with the second element.
It continues iterating through the list and swapping elements until it reaches the end of the list.
Now the list is sorted. Selection sort has quadratic time complexity in all cases.

Instructions: Write a function selectionSort which takes an array of integers as input and returns
an array of these integers in sorted order from least to greatest.
*/

function indexOfMinimum(arr, start = 0) {
    let min = start;
    for (let i = min + 1; i < arr.length; i++) {
        if (arr[min] > arr[i]) min = i;
    }
    return min
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let min = indexOfMinimum(array, i);
        swap(array, i, min)
    }
    return array;
}

let s = selectionSort([1, 3, 2]);
console.log(s)
