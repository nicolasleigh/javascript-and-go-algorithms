let fibonacciCache = {}; // Create the global cache.

function fibonacci(nthNumber, indent) {
  if (indent === undefined) {
    indent = 0;
  }

  let indentation = '.'.repeat(indent);
  console.log(`${indentation}fibonacci(${nthNumber}) called.`);

  // if (nthNumber in fibonacciCache) {
  if (Object.hasOwn(fibonacciCache, nthNumber)) {
    // If the value was already cached, return it.
    console.log(
      `${indentation}Returning memoized result: ${fibonacciCache[nthNumber]}`
    );
    return fibonacciCache[nthNumber];
  }

  if (nthNumber === 1 || nthNumber === 2) {
    // BASE CASE
    console.log(`${indentation}Base case fibonacci(${nthNumber}) returning 1.`);
    fibonacciCache[nthNumber] = 1; // Update the cache.
    return 1;
  } else {
    // RECURSIVE CASE
    console.log(
      `${indentation}Calling fibonacci(${nthNumber - 1}) (nthNumber - 1).`
    );
    let result = fibonacci(nthNumber - 1, indent + 1);

    console.log(
      `${indentation}Calling fibonacci(${nthNumber - 2}) (nthNumber - 2).`
    );
    result = result + fibonacci(nthNumber - 2, indent + 1);

    console.log(`${indentation}Returning ${result}.`);
    fibonacciCache[nthNumber] = result; // Update the cache.
    return result;
  }
}

console.log(fibonacci(10));
console.log(fibonacci(10));
