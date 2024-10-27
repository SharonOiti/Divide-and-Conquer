function countZeroes(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === 0) {
            right = mid - 1; // Look for the first 0 on the left
        } else {
            left = mid + 1; // Move right
        }
    }
    
    // At the end of the loop, 'left' is at the first 0
    return arr.length - left; // Count of 0s
}