function fizbuz(num) {
  if (num % 3 == 0) {
    console.log("Fiz");
  } else if (num % 5 == 0) {
    console.log("Buz");
  } else {
    console.log(`Number is even`);
  }
}
fizbuz(10);
fizbuz(12);
fizbuz(11);
