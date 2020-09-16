function displayAbbreviation() {
  if (
    !document.getElementsByTagName ||
    !document.createElement ||
    !document.createTextNode
  ) {
    return false;
  }
//   取得缩略词
  var abbr = document.getElementsByTagName("abbr");
  if (abbr.length < 1) {
    return false;
  }
  var defs = new Array();
//   遍历缩略词
  for (var i = 1; i < abbr.length; i++) {
    var current = abbr[i];
    if(current.childNodes.length<1){
        continue;
    }
    var key = current.lastChild.nodeValue;
    var definition = current.getAttribute("title");
    defs[key] = definition;
  }
//   创建定义列表
  var dlist = document.createElement("dl");
  for (key in defs) {
    var dtitle = document.createElement("dt");
    var ddes_text = document.createTextNode(key);
    dtitle.appendChild(ddes_text);
    var ddesc = document.createElement("dd");
    var definition = defs[key];
    var ddesc_text = document.createTextNode(definition);
    ddesc.appendChild(ddesc_text);
    dlist.appendChild(dtitle);
    dlist.appendChild(ddesc);
  }
  if(dlist.childNodes.length<1){
      return false;
  }
  var header = document.createElement("h2");
  var header_text = document.createTextNode("Abbreviation");
  header.appendChild(header_text);
  document.body.appendChild(header);
  document.body.appendChild(dlist);
}

addLoadEvent(displayAbbreviation);
