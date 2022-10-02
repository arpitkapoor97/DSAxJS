// Problem Statement :
// Given three points, check whether they lie on a straight (collinear) or not. [Google]
// For example:
// Input- [(1,1), (1,6), (0,9)]
// Output- No
// Input- [(1,1), (1,4), (1,5)]
// Output- Yes


// Time Complexity: O(1)
// Space Complexity: O(1)
function collinear(arr) {
    let A = arr[0];
    let B = arr[1];
    let C = arr[2];

    // Three points are collinear if slope of AB = slope of BC
    // slope =>  y2 - y1 / x2 - x1

    let slopeAB = Math.abs(A[1] - B[1]) / Math.abs(A[0] - B[0]);
    let slopeBC = Math.abs(B[1] - C[1]) / Math.abs(B[0] - C[0]);

    return slopeAB === slopeBC;
}

// const arr = [[1, 1], [1, 6], [0, 9]];

const arr = [[1, 1], [1, 4], [1, 5]];

console.log(collinear(arr));
