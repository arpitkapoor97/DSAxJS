// Problem Statement :
// Given an integer array nums of length n and an integer target, find three integers in nums
// such that the sum is closest to the target.[Amazon]
// You need to return the sum of three integers.
// For example:arr = [-1, 2, 1, -4], target = 1
// Output: 2
// Explanation: [-1+2+1] = 2 (The sum that is closest to the target is 2)

// Brute Force: T.C. = O(N^3), S.C. = O(1)
function threeSumClosest(nums, target) {
    let n = nums.length;
    let sums = [];
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                let sum = nums[i] + nums[j] + nums[k];
                let absDiff = Math.abs(sum - target);
                sums.push([absDiff, sum]);
            }
        }
    }
    sums.sort((a, b) => a[0] - b[0]);
    return sums[0][1];
};

// Optimal Apporach : O(N^2), S.C. = O(1)
var threeSumClosest = function (nums, target) {
    let ans = nums[0] + nums[1] + nums[nums.length - 1];
    // T.C. = O(NlogN)
    nums.sort((a, b) => a - b);

    // T.C. = O(N^2)
    for (let i = 0; i < nums.length - 2; i++) {
        let l = i + 1;
        let r = nums.length - 1;
        while (l < r) {
            let sum = nums[l] + nums[i] + nums[r];
            if (sum > target) {
                r--;
            } else {
                l++;
            }
            let absDiff = Math.abs(sum - target);

            if (absDiff < Math.abs(ans - target)) {
                ans = sum;
            }
        }
    }
    return ans;
};


const nums = [-1, 2, 1, -4];
const target = 1;
console.log(threeSumClosest(nums, target));