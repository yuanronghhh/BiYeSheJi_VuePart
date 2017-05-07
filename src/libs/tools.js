function Tools(){
}

Tools.prototype.getById = function(id){
  return document.getElementById(id);
};

Tools.prototype.getByClass = function(cls) {
  return document.getElementsByClassName(cls);
};

Tools.prototype.hasClass = function(dm, cls){
  return dm.classList.contains(cls);
};

Tools.prototype.addClass = function(dm, cls) {
  dm.classList.add(cls);
  return dm;
};

Tools.prototype.removeClass = function(dm, cls) {
  dm.classList.remove(cls);
  return dm;
}

Tools.prototype.addEvents = function(dv, evt_arr) {
  var evts = evt_arr || [];
  for (var i = 0; i < evts.length; i++) {
    for (var e in evts[i]) {
      var cb  = evts[i][e];
      dv.addEventListener(e, cb, false);
    }
  }
};

export default Tools;
