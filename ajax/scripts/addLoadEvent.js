function addLoadEvent(func){
    var onLoad = window.onload;
    if(typeof window.onload != "function"){
        window.onload = func;
    }
    else{
        window.onload = function(){
            onLoad();
            func();
        }
    }

}