/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  const m = nums1.length;
  const n = nums2.length;
  let left = 0;
  let right = m;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const mid2 = Math.floor((m + n + 1) / 2) - mid;

    const leftMax = mid === 0 ? -Infinity : nums1[mid - 1];
    const rightMin = mid === m ? Infinity : nums1[mid];

    const left2Max = mid2 === 0 ? -Infinity : nums2[mid2 - 1];
    const right2Min = mid2 === n ? Infinity : nums2[mid2];

    if (leftMax <= right2Min && left2Max <= rightMin) {
      if ((m + n) % 2 === 0) {
        return (Math.max(leftMax, left2Max) + Math.min(rightMin, right2Min)) / 2;
      } else {
        return Math.max(leftMax, left2Max);
      }
    } else if (leftMax > right2Min) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return null;
};