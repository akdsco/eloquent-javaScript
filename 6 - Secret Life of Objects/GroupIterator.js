// Your code here (and the code from the previous exercise)
// Make the Group class from the previous exercise iterable. Refer to the section about the iterator interface earlier
// in the chapter if you are not clear on the exact form of the interface anymore.
//
// If you used an array to represent the group’s members, don’t just return the iterator created by calling the
// Symbol.iterator method on the array. That would work, but it defeats the purpose of this exercise.
//
// It is okay if your iterator behaves strangely when the group is modified during iteration.

import Group from './group'

class GroupIterator {
  constructor(group) {
    this.pos = 0;
    this.group = group;
  }

  next() {
    if (this.pos >= this.group.data.length) return {done: true};
    let result = {value: this.group.data[this.pos], done: false};
    this.pos++;
    return result;
  }
}

Group.prototype[Symbol.iterator] = function() {
  return new GroupIterator(this);
};


for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c