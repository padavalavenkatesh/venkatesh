function maxnum(a, b) {
  if (a < b) {
    console.log(`${b} is maximum`);
  } else if (a > b) {
    console.log(`${b} is minimum`);
  } else {
    console.log(`${a} is equal ${b}`);
  }
}
var x = maxnum(10, 30);
var y = maxnum(5, 4);
var z = maxnum(1, 1);
