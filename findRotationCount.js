function findRotationCount(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] > arr[right]) {
            left = mid + 1; // Search in the right part
        } else {
            right = mid; // Search in the left part
        }
    }
    return left; // The index of the smallest element
}