// Write a function that computes the dominant writing direction in a string of text. Remember that each script object
// has a direction property that can be "ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom).
//
// The dominant direction is the direction of a majority of the characters that have a script associated with them. The
// characterScript and countBy functions defined earlier in the chapter are probably useful here.
//
// Examples
//
// console.log(dominantDirection("Hello!"));
// → ltr
// console.log(dominantDirection("Hey,مساء الخير"));
// → rtl'
//

function dominantDirection(text) {
  // countBy and characterScript used from the book's context / look below
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({name}) => name !== "none");

  console.log(scripts);
  let result = {name: 'none', count: 0};

  // this map can be replaced with reduce like this:
  // scripts.reduce((a, b) => a.count > b.count ? a : b).name;

  scripts.map(item => {
    if (result.count < item.count) {
      result = item
    }
  });

  return result.name
}




// context methods

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name === name);
    if (known === -1) {
      counts.push({name, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

// console.log(countBy([1, 2, 3, 4, 5], n => n > 2));
// → [{name: false, count: 2}, {name: true, count: 3}]

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}

// console.log(characterScript(121));
// → {name: "Latin", …}