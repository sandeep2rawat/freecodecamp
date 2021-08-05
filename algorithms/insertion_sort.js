/*
https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-insertion-sort

The next sorting method we'll look at is insertion sort. This method works by building up a sorted array
at the beginning of the list. It begins the sorted array with the first element. Then it inspects the next
element and swaps it backwards into the sorted array until it is in sorted position. It continues iterating
through the list and swapping new items backwards into the sorted portion until it reaches the end.
This algorithm has quadratic time complexity in the average and worst cases.

Instructions: Write a function insertionSort which takes an array of integers as input and returns an array
of these integers in sorted order from least to greatest.
*/

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function swapLeftAtSortedPosition(arr, i) {
    while (i > 0 && arr[i] < arr[i - 1]) {
        swap(arr, i, i - 1);
        i -= 1;
    }
}

function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        swapLeftAtSortedPosition(array, i)
    }
    return array;
}

let s = insertionSort([1, 3, 2])
console.log(s);
