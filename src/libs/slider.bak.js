function Slider(time) {
  this.time = time;
  this.init();
}

Slider.prototype.init = function(){
  this.prev = document.getElementById("prev");
  this.next = document.getElementById("next");
  this.imglist = document.getElementById("imglist").getElementsByTagName("div");
  this.dot = document.getElementById("slidot").getElementsByTagName("li");
  this.n = this.imglist.length;
  this.index = 0;
  this.fade = false;
};

Slider.prototype.setOpacity = function(obj, opacity){
  if(obj.filters){
    obj.style.filter = "alpha(opacity:" +opacity+ ")";
  } else {
    obj.style.opacity = opacity / 100;
  }
};

Slider.prototype.hasClass = function(obj, cls){
  var name_reg = new RegExp('(^|\\s)' + cls + '(\\s|$)');
  var bool = obj.className.match(name_reg);
  return bool;
};

Slider.prototype.addClass = function(obj, cls) {
  if(!this.hasClass(obj, cls)){
    if(obj.className.length === 0){
      obj.className = cls;
    } else {
      obj.className += " "+ cls;
    }
  }
};

Slider.prototype.removeClass = function(obj, cls) {
  if(this.hasClass(obj,cls)){
    var argu = new RegExp('(^|\\s)' + cls + '(\\s|$)');
    obj.className=obj.className.replace(argu, "");
  }
}

Slider.prototype.fadeIn = function(obj) {
  var fade = true;
  obj.style.display = "block";
  var opa = 0;
  (function func(){
    if(opa < 100){
      opa += 10;
      this.setOpacity(obj, opa);
      setTimeout(func, 20)
    } else {
      fade = false;
    }
  })();
};

Slider.prototype.lightDot = function(){
  for (var i=0; i < this.n; i++){
    if(this.hasClass(this.dot[i], "on")){
      this.removeClass(this.dot[i], "on");
      break;
    }
  }
  this.addClass(this.dot[this.index], "on");
};

Slider.prototype.fadeOut = function(obj){
  var fade = true;
  var opa = 100;
  (function func(){
    if(opa > 0){
      opa -= 10;
      this.setOpacity(obj, opa);
      setTimeout(func, 30)
    } else {
      obj.style.display = "none";
    }
  })();
};

Slider.prototype.dotControl = function(){
  for(var i=0; i < this.n; i++){
    this.dot[i].order = i;
    this.dot[i].onclick = function(){
      if(this.order === this.index){
        return
      } else {
        this.fadeOut(this.imglist[this.index]);
        this.index = this.order;
        this.fadeIn(this.imglist[this.index]);
        this.lightdot();
      }
    }
  }
}

Slider.prototype.stop = function(num){
  clearTimeout(num);
};

export default Slider;
