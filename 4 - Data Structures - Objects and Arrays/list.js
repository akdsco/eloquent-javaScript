/* Lists
 *
 * A list is a nested set of objects, with the first object holding a reference to the second, 
 * the second to the third, and so on.
 *
 * A nice thing about lists is that they can share parts of their structure. For example, if I create two new 
 * values {value: 0, rest: list} and {value: -1, rest: list} (with list referring to the binding defined earlier), 
 * they are both independent lists, but they share the structure that makes up their last three elements. The original
 * list is also still a valid three-element list.
 *
 * Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. 
 * Also write a listToArray function that produces an array from a list. Then add a helper function prepend, which 
 * takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, 
 * which takes a list and a number and returns the element at the given position in the list (with zero referring to 
 * the first element) or undefined when there is no such element.
 * If you haven’t already, also write a recursive version of nth.
 *
 */


function arrayToList(arr) {
  let list = null;

  for(let i = (arr.length - 1); i >= 0; i--) {
      list = {value: arr[i], rest: list}
  }
  return list
}

function listToArray(list) {
  let arr = [];
  for (let node = list; node; node = node.rest) {
    arr.push(node.value)
  }
  return arr
}

function prepend(elem, list) {
  return {value: elem, rest: list}
}

function nth(list,num) {
  let count = 0;
  for(let node = list; node; node = node.rest) {
    if(count === num) {
      return node.value
    }
    count++
  }
  return "List wasn't so deep or you selected negative value"
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20