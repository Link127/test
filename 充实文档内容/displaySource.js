function displaySource(){
    var quote = document.getElementsByTagName("blockquote");
    for (let i = 0; i < quote.length; i++) {
        if(!quote[i].getAttribute("cite")){
            continue;
        }
        var url = quote[i].getAttribute("cite");
        var quoteElement = quote[i].getElementsByTagName("*");
        if(quoteElement.length<1)continue;
        var elem = quoteElement[quoteElement.length-1];
        var link = document.createElement("a");
        var txt = document.createTextNode("source");
        link.appendChild(txt);
        link.setAttribute("href",url);
        var sup = document.createElement("sup");
        sup.appendChild(link);
        elem.appendChild(sup);
        
    }
}
addLoadEvent(displaySource)