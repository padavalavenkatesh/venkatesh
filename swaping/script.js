//JavaScript program to swap two variables

function swap(a, b) {
  var a;
  var b;
  var temp;
  console.log(`before a = ${a} and b = ${b}`);
  temp = a;
  a = b;
  b = temp;

  console.log(`after a = ${a} and b = ${b}`);
}
var x = swap(30, 20);
