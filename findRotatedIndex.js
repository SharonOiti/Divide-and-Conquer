function findRotatedIndex(arr, num) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === num) return mid;

        if (arr[left] <= arr[mid]) { // Left half is sorted
            if (num >= arr[left] && num < arr[mid]) {
                right = mid - 1; // Search left
            } else {
                left = mid + 1; // Search right
            }
        } else { // Right half is sorted
            if (num > arr[mid] && num <= arr[right]) {
                left = mid + 1; // Search right
            } else {
                right = mid - 1; // Search left
            }
        }
    }
    return -1; // Not found
}