function showpic(whichpic) {
  var source = whichpic.getAttribute("href");
//   var source = whichpic.src;
  if (!document.getElementById("placeHolder")) {
    return false;
  }
  var placeHolder = document.getElementById("placeHolder");
  if (placeHolder.nodeName != "IMG") {
    return false;
  }
  placeHolder.setAttribute("src", source);
//   placeHolder.src = source
  if (document.getElementById("description")) {
    var text = whichpic.getAttribute("title")
      ? whichpic.getAttribute("title")
      : "";
    var description = document.getElementById("description");
    if (description.firstChild.nodeType == 3) {
      // description.innerHTML = text
      description.firstChild.nodeValue = text;
    }
  }
  return true;
}

function prepareGallery() {
  if (!document.getElementsByTagName) {
    return false;
  }
  if (!document.getElementById) {
    return false;
  }
  if (!document.getElementById("imagegallery")) {
    return false;
  }
  var gallery = document.getElementById("imagegallery");
  var links = gallery.getElementsByTagName("a");
  for (var i = 0; i < links.length; i++) {
    links[i].onclick = function () {
      return showpic(this) ? false : true;

    };
   
  }
}

function addLoadEvent(func) {
  var onLoad = window.onload;
  if (typeof window.onload != "function") {
    window.onload = func;
  } else {
    window.onload = function () {
      onLoad();
      func();
    };
  }
}

addLoadEvent(prepareGallery);

// 先写下换图片功能函数，再用预备函数绑定事件给每个a标签，最后写事件加载，加载准备函数即可