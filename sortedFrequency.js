function sortedFrequency(arr, num) {
    const firstIndex = findFirstIndex(arr, num);
    if (firstIndex === -1) return -1; // num not found

    const lastIndex = findFirstIndex(arr, num + 1); // Find first occurrence of num + 1
    return (lastIndex === -1 ? arr.length : lastIndex) - firstIndex; // Count
}

function findFirstIndex(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === num) {
            result = mid; // Store the index
            right = mid - 1; // Look for earlier occurrences
        } else if (arr[mid] < num) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return result;
}