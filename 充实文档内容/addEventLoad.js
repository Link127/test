//window.onload这个方法一次只能绑定一个事件函数

//下面这种方法则可以多吃加载绑定函数

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