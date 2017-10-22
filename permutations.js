function permutations(n, arr, presentPerms) {
  let perms = presentPerms;
  if (n === 1) {
    perms.push(arr);
    return perms;
  } else {
    for (let i = 0; i < n - 1; i++) {
      permutations(n - 1, arr, perms);
      if (n % 2 === 0) {
        swap(arr, i, n - 1);
        perms.push(arr);
      } else {
        swap(arr, 0, n - 1);
        perms.push(arr);
      }
    }
    permutations(n - 1, arr, perms);
  }
}

function swap(arr, q, r) {
  let temp = arr[q];
  arr[q] = arr[r];
  arr[r] = temp;
}

const nums = [0, 1, 2, 3];
console.log(permutations(nums.length, nums, []));
