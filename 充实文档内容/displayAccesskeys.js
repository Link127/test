function displayAcess() {
  if (
    !document.getElementsByTagName ||
    !document.createElement ||
    !document.createTextNode
  ) {
    return false;
  }
  var links = document.getElementsByTagName("a");
  var akeys = new Array();
  for (var i = 0; i < links.length; i++) {
    var curr = links[i];
    if (!curr.getAttribute("accesskey")) {
      continue;
    }
    var key = curr.getAttribute("accesskey");
    var txt = curr.innerText;
    akeys[key] = txt;
  }
  var list = document.createElement("ul");
  for (key in akeys) {
    var txt = akeys[key];
    var str = key + ": " + txt;
    var item = document.createElement("li");
    var text_node = document.createTextNode(str);
    item.appendChild(text_node);
    list.appendChild(item);
  }
  var h3 = document.createElement("h3");
  var h3_txt = document.createTextNode("Accesskeys");
  h3.appendChild(h3_txt)
  document.body.appendChild(h3);
  document.body.appendChild(list);
}

addLoadEvent(displayAcess);
