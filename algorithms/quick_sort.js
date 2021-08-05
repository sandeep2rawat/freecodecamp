/*
https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-quick-sort

Here we will move on to an intermediate sorting algorithm: quick sort. Quick sort is an efficient,
recursive divide-and-conquer approach to sorting an array. In this method, a pivot value is chosen
in the original array. The array is then partitioned into two subarrays of values less than and
greater than the pivot value. We then combine the result of recursively calling the quick sort
algorithm on both sub-arrays. This continues until the base case of an empty or single-item array
is reached, which we return. The unwinding of the recursive calls return us the sorted array.

Quick sort is a very efficient sorting method, providing O(nlog(n)) performance on average.
It is also relatively easy to implement. These attributes make it a popular and useful sorting method.

Instructions: Write a function quickSort which takes an array of integers as input and returns an array
of these integers in sorted order from least to greatest. While the choice of the pivot value is important,
any pivot will do for our purposes here. For simplicity, the first or last element could be used.
*/

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function partition(arr, low, high) {
    let pivot = low;
    low += 1;
    while (low < high) {
        while (arr[low] <= arr[pivot]) low++;
        while (arr[high] > arr[pivot]) high--;

        if (low < high) swap(arr, low, high);
    }
    swap(arr, pivot, high);
    return high;
}

function quickSort(array, low = 0, high = array.length - 1) {
    if (low < high) {
        let pivot = partition(array, low, high);
        quickSort(array, low, pivot - 1);
        quickSort(array, pivot + 1, high);
    }
    return array;
}

let s = quickSort([1, 3, 2, 3, 6, 3, 2, 4]);
console.log(s);
