function foo(a, b) {
  // Handle nullish values (null or undefined) using optional chaining and nullish coalescing
  const aValue = a ?? 0; // Use 0 as default if a is null or undefined
  const bValue = b ?? 0; // Use 0 as default if b is null or undefined
  return aValue + bValue;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 2
console.log(foo(1, null)); // Output: 1
console.log(foo(null, null)); // Output: 0
console.log(foo(undefined,2)); //Output: 2
console.log(foo(1,undefined)); //Output: 1
console.log(foo(undefined,undefined)); //Output: 0