/*
Irina Bejan
CS 320
Homework 4: Coding Standard (ESLint) and Git
 */

/*
1) primeGen: This function takes a threshold number, and returns
a list of prime numbers which are below that threshold.

e.g. primeGen(10) => [2, 3, 5, 7]

The Sieve of Eratosthenes would be useful here. Do not have a
hard coded list of prime numbers that gets used. They should be
generated with each call of a new value.
 */

function primeGen(threshold) {
  // make an array with values up to the threshold, starting from 2
  let array = Array.from({ length: threshold - 2 }, (_, i) => i + 2);

  // remove all values that are a multiple of the current value
  let i = 0;
  let c = array[i];
  while (c <= array.length) {
    array = _.reject(array, function (num) {
      if (c !== num) { return num % c === 0; }});
    c = array[i++];
  }
  return array;
}

function main() {
  console.log(primeGen(10));
}

main();
