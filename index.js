// ! - Problem# 1

// Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1

Array.prototype.last = function () {
  return this[this.length - 1] || "There is no element in the array";
};

const lastEl = [].last();
console.log(lastEl);
