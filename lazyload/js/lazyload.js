/**
 * Created by sa on 16-11-2.
 */
(function () {
    var imgArr = document.getElementsByTagName("img");
    var len=0; //防止每次都从第0个开始循环
    var scroll = function () {
        //可视区域的宽度
        var seeWidth =parseInt(document.documentElement.clientWidth || document.body.clientWidth);
        //可视区域的高度
        var seeHeight = parseInt(document.documentElement.clientHeight || document.body.clientHeight);
        //滚动条的高度
        var scrollTop = parseInt(document.documentElement.scrollTop || document.body.scrollTop);
        for(var i= len; i<imgArr.length;i++){
            var imgOffsetTop = imgArr[i].offsetTop;
            if(imgOffsetTop<seeHeight+scrollTop){
                if(imgArr[i].getAttribute("src")=="img/loading.gif"){
                    imgArr[i].src = imgArr[i].getAttribute("lazyload");
                }
            }else {
                len =i;
                break;
            }
        }
    };
    window.onscroll= function () {
        scroll();
    };
    scroll();
})();
