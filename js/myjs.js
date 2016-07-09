window.onload = function () {
    topbarRgba();
    slide();
    dowmTime();
}


//搜索栏透明度
function topbarRgba() {
    var topbar = document.getElementById("topbar");
    var slideHeight = document.getElementById("slide").querySelector("ul").offsetHeight;
    window.onscroll = function () {
        var scrollTop = document.body.scrollTop;
        console.log(scrollTop);
        var flag = scrollTop / slideHeight;
        topbar.style.backgroundColor = "rgba(201,21,25," + flag + ")";
    };

}
//轮播图
function slide() {
    var slideUl = document.querySelector("#slide").querySelectorAll("ul")[0];
    var slidewidth = document.querySelector("#slide").offsetWidth;
    console.log(slidewidth);
    var index = 1;
    var time = setInterval(function () {
        index++;
        addtransLateX(-index * slidewidth);
        addTransition();

    }, 2000);


    //获取小圆点图标
    var points = document.querySelectorAll("#slide ul")[1];
    var lis = points.getElementsByTagName("li");
    console.log(lis);
    slideUl.addEventListener("transitionend", function () {
        if (index >= 9) {
            index = 1;
            addtransLateX(-index * slidewidth);
            removetransition();
        } else if (index <= 0) {
            index = 8;
            addtransLateX(-index * slidewidth);
            removetransition();
        }
        for (var i = 0; i < lis.length; i++) {
            lis[i].className = "";
        }
        lis[index - 1].className = "row";
    });

    //滑动开始事件
    var startX = 0;
    var endX = 0;
    var distanceX = 0;

    var moveX = 0;
    var moveDistanceX = 0;
    //滑动开始事件
    slideUl.addEventListener("touchstart", function (e) {
        startX = e.touches[0].clientX;
        clearInterval(time);//清除定时器
    });
    //滑动中事件
    slideUl.addEventListener("touchmove", function (e) {
        moveX = e.touches[0].clientX;
        moveDistanceX = moveX - startX;
        x = moveDistanceX - index * slidewidth;
        addtransLateX(x);
        removetransition();
    });
    //滑动结束事件
    slideUl.addEventListener("touchend", function (e) {
        endX = e.changedTouches[0].clientX;
        distanceX = endX - startX;


        if (Math.abs(distanceX) > slidewidth * 1 / 3) {
            if (distanceX < 0) {
                index++;
                addtransLateX(-index * slidewidth);
                addTransition();
            } else if (distanceX > 0) {
                index--;
                addtransLateX(-index * slidewidth);
                addTransition();
            }
        }

        index = index;
        addtransLateX(-index * slidewidth);
        addTransition();

        //重新开启定时器
        clearInterval(time);
        time = setInterval(function () {
            index++;
            addtransLateX(-index * slidewidth);
            addTransition();

        }, 2000);
    });


    //轮播图移动函数
    function addtransLateX(x) {
        slideUl.style.transform = "translateX(" + x + "px)";
    }

    //轮播图添加过渡函数
    function addTransition() {
        slideUl.style.transition = "all 0.2s";
    }

    //轮播图清除过渡
    function removetransition() {
        slideUl.style.transition = "none";
    }
}
//秒杀5小时倒计时
function dowmTime() {
    var seckillTime = 5 * 60 * 60;
    var time = setInterval(function () {
        seckillTime--;
        var h = seckillTime / 3600;
        var m = seckillTime % 3600 / 60;
        var s = seckillTime % 60;

        var seckillTitle = document.querySelector(".seckill-title");
        var spans = seckillTitle.querySelectorAll("span");
        console.log(spans);
        spans[1].innerHTML = Math.floor(h / 10);
        spans[2].innerHTML = Math.floor(h % 10);

        spans[4].innerHTML = Math.floor(m / 10);
        spans[5].innerHTML = Math.floor(m % 10);

        spans[7].innerHTML = Math.floor(s / 10);
        spans[8].innerHTML = Math.floor(s % 10);
    }, 1000);
}
