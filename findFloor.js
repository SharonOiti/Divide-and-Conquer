function findFloor(arr, x) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === x) return arr[mid]; // Exact match
        if (arr[mid] < x) {
            result = arr[mid]; // Possible floor
            left = mid + 1; // Look right
        } else {
            right = mid - 1; // Look left
        }
    }
    return result; // Return the largest number < x
}