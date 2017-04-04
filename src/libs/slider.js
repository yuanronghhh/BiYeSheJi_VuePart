/* eslint-disable */
function Slider() {
  this.slider = this.getById("slider");
  this.count  = this.slider.children[0].children.length;
}

Slider.prototype.init = function(args){
  this.slideStart();
};

Slider.prototype.slideStart = function() {
  var self = this;
  self.reset();
  setTimeout(function(){
    self.slideNext();
  });
};

Slider.prototype.reset = function(){
  this.slider.style.transition = '';
  this.slider.style.left = "0%";
};

Slider.prototype.slideNext = function() {
  var self = this; 
  var sd = self.slider;
  var tm = setInterval(slide, 3000);
  var i = 0;
  function slide(){
    var lf = parseInt(sd.style.left || 0);
    var nw = (lf -= 100);
    i++;
    sd.style.left = nw + "%";
    self.slider.style.transition = "1s";
    if(i >= self.count) {
      clearInterval(tm);
      self.slideStart();
    }
  }
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

/**
 * dm : htmldom
 * cls : string 
 * return dm
 */
Slider.prototype.addClass = function(dm, cls) {
  dm.classList.add(cls);
  return dm;
};
Slider.prototype.removeClass = function(dm, cls) {
  dm.classList.remove(cls);
  return dm;
}

/**
 * caution: 事件里面的this指代slider dom,而并非Slider.
 */
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
