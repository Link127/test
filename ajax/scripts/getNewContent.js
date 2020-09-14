function getNewContent() {
  var request = getHttp();
  if (request) {
    request.open("GET", "http://47.106.165.163:3000/song/url?id=33894312", true);
    request.onreadystatechange = function () {
      if (request.readyState == 4) {
        var para = document.createElement("p");
        var txt = document.createTextNode(request.responseText);
        para.appendChild(txt);
        document.getElementById("new").appendChild(para);
      }
    };
    request.send(null);
  }else{
      alert("sorry")
  }
}
addLoadEvent(getNewContent);