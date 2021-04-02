var speed;
var maxspeed = 50;
var Penality;
function sp(speed) {
  if (speed < maxspeed) {
    console.log(`violated the speed limit`);
    if (speed > 50) {
      penality = speed * 100;
      console.log(`fine to be paid: ${penality}`);
    }
  }
}
var x = sp(10);
var y = sp(100);
