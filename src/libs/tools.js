/* eslint-disable */
function Tools(){
}

/**
 * 将时间戳转换为一般格式
 */
Tools.prototype.formatDate = function(date){
  var tm = new Date(date);
  var yr = tm.getFullYear();
  var month = (tm.getMonth() + 1);
  var day = tm.getDate();
  var hours = tm.getHours();
  var minutes = tm.getMinutes();
  // var seconds = tm.getSeconds();
  return yr + "年" + month + "月" + day + "日" + " " + hours + ":" + minutes;
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

Tools.prototype.setCookie = function(cookie_name, value, expire_day){
  var exdate = new Date();
  exdate.setDate(exdate.getDate()+expire_day);
  document.cookie = cookie_name+ "=" + window.escape(value)+
    ((expire_day === null) ? "" : ";expires="+exdate.toGMTString());
}

Tools.prototype.getCookie = function (name) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim;
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

Tools.prototype.delAllCookie = function(){
  document.cookie.split(";").forEach(function(c) {
    document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
  });
}

export default Tools;
