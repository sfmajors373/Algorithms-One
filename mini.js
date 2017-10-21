function permutations(n, arr) {
  if (n === 0) {
    return arr;
  } else if (n ===1) {
    return arr;
  } else {
    for (let i = 0; i < n - 1; i++) {
      permutations(n - 1, arr);
      if (n % 2 === 0) {
        swap(arr[i], arr[n - 1]);
      } else {
        swap(arr[0], arr[n - 1]);
      }
      console.log(arr);
    }
    permutations(n - 1, arr);
  }
}

function swap(q, r) {
  let temp = q;
  q = r;
  r = temp;
}

permutations(3, [1, 2, 3]);


