/** MERGESORT Algorithm
 * 
 * timespace: 
 * - log linear runtime:  avg && worst
 * - constant memspaace
 * 
 * approach: divide and conquer
 * > recursively break down problem into simpler sub-problems and merge back together
 * > - the number of breakdowns (recursive splits) is a log of the number of items in the array
 * > eg ->
 * 
 * 
 * 
 * pseudo:  
 * - recursively split array (left, right) until single ele arrays
 *    - arrays of length 1 is sorted by its singular nature
 * - merge right into left
 *    - 
 *  
 * 
 */

/** Part 1 - Merge Utility
 * You are given two sorted arrays of numbers, arrA and arrB. 
 * - A has a large enough buffer at the end to hold B
 * 
 * Merge B into A in sorted order (mutate the inputs is allowable)
 * - i.e. Do NOT create a new composite structure
 * - returned array should reference arrA's input arg's memspace
 * 
 * treat arrB like a queue -> shift and process each ele: currB
 * iterate through A
 * - if currB is greater than A[idx] continue
 * - else splice(start=idx,  delete=0, currB) in currB
 * - update currB
 * 
 * ## handle equal vals
 * ## handle B values greater than last idxA
 * 
 */

const mergeSortedArrays = (arrA, arrB) => {
  let idx = 0, currA, currB = arrB.shift();  

  while (currB) {
    currA = arrA[idx];
    
    (currB <= currA) &&                                       // splice smaller Bvals into A
      (arrA.splice(idx, 0, currB), currB = arrB.shift());
    (idx === arrA.length - 1) &&                              // if idx @end of arrA, push greater Bvals 
      (arrA.push(currB), currB = arrB.shift());

    idx++
  }

  return arrA
}



// testcases
const testA = [1, 3, 5, 7];
const testB = [2, 4, 6, 8 ];

const expected = [1, 2, 3, 4, 5, 6, 7, 8]
const result = mergeSortedArrays(testA, testB);

console.log(`expect ${result} to equal ${expected}: 
  ${JSON.stringify(result) === JSON.stringify(expected) ? 'PASS!!!' : 'FAIL!!!'}`)
console.log(`expect ${result} to be ${testA}: ${result === testA ? 'PASS!!!' : 'FAIL!!!'}`)




/** Part 2 - MergeSort
 * 
 * We have an array of unsorted array of numbers
 * 
 * Implement mergesort algorithm 
 * 
 * approach: 
 * recursively split arrays til 1 ele
 * - merge left and right using utility
 * 
 */

const mergeSort = unsortedNums => {


}



// testcases:
const unsortedArr = [31, 27, 28, 42, 13, 8, 11, 30, 17, 41, 15, 43, 1, 36, 9, 16, 20, 35, 48, 37, 7, 26, 34, 21, 22, 6, 29, 32, 49, 10, 12, 19, 24, 38, 5, 14, 44, 40, 3, 50, 46, 25, 18, 33, 47, 4, 45, 39, 23, 2];
const ms_result = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];

console.log()
