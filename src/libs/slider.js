function Slider(time) {
  this.time = time;
  this.init();
}

Slider.prototype.init = function () {
  console.log(this.time);
}
