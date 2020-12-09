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
  _.each(array, function (element, index) {
    const c = array[index];
    array = _.reject(array, function (num) {
      if (c !== num) { return num % c === 0; }
      return 0;
    });
  });

  return array;
}

/*
2) cumulativeSum: This function takes a list of numbers, and
returns the cumulative sum of these numbers.

e.g. cumulativeSum([1, 2, 3, 4]) => [1, 3, 6, 10]

For each value in the inserted array, it should be the sum of
its preceding values in the input array. So, position 2 is the
sum of positions 0-2, which is 1+2+3 = 6 in the above example.
*/

function cumulativeSum(array) {
  // create a new array and int to hold the sum
  const newArray = [];
  let sum = 0;

  // for each value in array, sum the total and set it as the value for the new array
  _.each(array, function (num, index) {
    sum += array[index];
    newArray[index] = sum;
  });

  return newArray;
}

/*
3) maxPrimeSum: The function maxPrimeSum takes a threshold number
and returns a two-element array:

First, the highest prime number below the threshold
that is the sum of the most consecutive primes.
Second, the count of the consecutive prime terms.

maxPrimeSum(100) => [ 41, 6]
maxPrimeSum(1000) => [953, 21]

It would be a good idea to utilize the two previous functions
for this part.
*/

function maxPrimeSum(threshold) {
  // generate a list of primes up to the threshold
  const primes = primeGen(threshold);

  // array to hold sums
  const sums = [];

  // iterate through the list of primes
  _.each(primes, function () {
    // generate a maxPrimeSum list
    const list = cumulativeSum(primes);

    // splice out the sums above the threshold
    let max = _.find(list, function (num) { return num >= threshold; });
    list.splice(list.indexOf(max), list.length);

    // find the largest prime sum
    max = _.findLastIndex(list, function (num) { return primes.includes(num); });
    sums.push({ sum: list[max], count: max + 1 });

    // shift the list to look for other consecutive sums
    primes.shift();
  });

  // get the longest sum of consecutive primes found (highest count)
  const max = _.max(sums, function (arr) { return arr.count; });
  return [max.sum, max.count];
}

function main() {
  console.log(primeGen(10));
  console.log(cumulativeSum([1, 2, 3, 4, 5, 6]));
  console.log(maxPrimeSum(1000));
}

main();
