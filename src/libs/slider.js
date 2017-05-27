function Slider() {
  this.sd = this.getById("slider-wrapper");
  this.i = 0;
  this.cdom = this.sd.children[3];
}

Slider.prototype.init = function(args){
  this.slideStart();
};

Slider.prototype.slideStart = function() {
  setTimeout(() => {
    this.fadeIn(this.cdom);
    this.showNext();
    this.slideNext();
  });
};

Slider.prototype.reset = function(){
};

Slider.prototype.fadeIn = function(dm){
  dm.style.transition = "1s";
  dm.style.opacity = "0";
};

Slider.prototype.fadeOut = function(dm){
  dm.style.transition = "1s";
  dm.style.opacity = "1";
};

Slider.prototype.showNext = function() {
  this.i += 1;

  if(this.i > 3) {
    this.i = 0;
  }

  this.cdom = this.sd.children[this.i];
  this.fadeOut(this.cdom);
};

Slider.prototype.show = function(dm){
  dm.style.transition = '';
  dm.style.opacity = '1';
}

Slider.prototype.slideNext = function() {
  var tm = setInterval(() => {
    this.fadeIn(this.cdom);
    clearInterval(tm);
    this.slideStart();
  }, 3000);
};

Slider.prototype.addEvents = function(dv, event_array) {
  var evt_arr = event_array || [];
  for (var i = 0; i < evt_arr.length; i++) {
    for (var e in evt_arr[i]) {
      var cb  = evt_arr[i][e];
      dv.addEventListener(e, cb, false);
    }
  }
};

Slider.prototype.getById = function(id){
  return document.getElementById(id);
};

Slider.prototype.getByClass = function(cls) {
  return document.getElementsByClassName(cls);
};

Slider.prototype.hasClass = function(dm, cls){
  return dm.classList.contains(cls);
};

Slider.prototype.addClass = function(dm, cls) {
  dm.classList.add(cls);
  return dm;
};
Slider.prototype.removeClass = function(dm, cls) {
  dm.classList.remove(cls);
  return dm;
}

Slider.prototype.touchStartEvent = function(evt) {
  console.log(evt);
};

Slider.prototype.touchMoveEvent = function(evt) {
  console.log(evt.touches);
};

Slider.prototype.touchEndEvent = function(evt) {
  console.log(evt);
};

export default Slider;
