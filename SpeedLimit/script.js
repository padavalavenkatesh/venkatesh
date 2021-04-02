var speed;
var maxspeed = 50;
var Penality;
function sp(speed) {
  if (speed > maxspeed) {
    console.log(`violated the speed limit`);
    penality = speed * 100;
    console.log(`fine to be paid: ${penality}`);
  } else {
    console.log("Vehicle is in good speed");
  }
}

sp(10);
sp(100);
