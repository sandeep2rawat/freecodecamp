/*
https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/no-repeats-please

Return the number of total permutations of the provided string that don't have repeated consecutive letters.
Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa),
but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.
*/

function * permutationGenerator(arr, initial=[]){
  if (arr.length == 0){
    yield initial;
  }
  
  for (let i = 0; i < arr.length; i++) {
    let arrCopy = [...arr];
    let cur = arr.slice(i, i+1)[0];
    initial.push(cur);
    arrCopy.splice(i, 1);
    yield * permutationGenerator(arrCopy, initial);
    initial.pop();
  }
}

function containsConsecutiveElements(arr) {
  let prev = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (prev == arr[i]) return true;
    prev = arr[i];
  }
  return false;
}

function permAlone(str) {
  let gen = permutationGenerator(str.split(""));
  let seq;
  let nonConsecutiveSeq = 0;
  while(seq = gen.next().value) {
    if(!containsConsecutiveElements(seq)) {
      nonConsecutiveSeq += 1
    }
  }
  return nonConsecutiveSeq;
}

let r = permAlone('aabb');
console.log(r);

