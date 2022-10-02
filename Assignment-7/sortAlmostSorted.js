// Problem Statement :
// An almost sorted array is given to us and the task is to sort that array completely. Then,
// which sorting algorithm would you prefer and why?[Salesforce]


// Insertion Sort.
// Why??
// Intuition behind Insertion Sort is to sorting like we sort the deck of Cards.
// For Every iteration, 
// if the number is less than it's previous number we keep swapping with previous number until it reaches the correct spot,
// Otherwise we iterate to next element.

// So in case of a Sorted Arr, it will take only one iteration to know if the arr is sorted. => O(N) {Best case for the given problem}.
// One optimatisation is to use binary search for finding the correct position of number to swap. This method will make least number of comparisions.
// Worst Case is when arr is sorted in reverse order => O(N^2)

// Code : 

function insertionSort(arr, n) {
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;
        // Normal Insertion Sort
        // while (arr[j] > key && arr[j] > 0) {
        //     arr[j + 1] = arr[j];
        //     j = j - 1;
        // }

        // // Binary Insertion Sort
        let loc = Math.floor(binarySearch(arr, key, 0, j));
        while (j >= loc) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}

function binarySearch(a, item, low, high) {
    if (high <= low)
        return (item > a[low]) ? (low + 1) : low;
    mid = Math.floor((low + high) / 2);
    if (item == a[mid])
        return mid + 1;
    if (item > a[mid])
        return binarySearch(a, item, mid + 1, high);
    return binarySearch(a, item, low, mid - 1);
}

const arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(insertionSort(arr, arr.length));