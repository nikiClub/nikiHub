/**
 * Created by NiKi on 2016/7/7.
 */

window.onload = function () {
    swipeLeft();
    swipeRight();
}
function swipeLeft() {


    var categoryLeft = document.querySelector(".category-left");
    var categoryLeftUl = categoryLeft.querySelector("ul");
    var lis = categoryLeftUl.querySelectorAll("li");
    console.log(lis);

    //开始和结束位置
    var startY = 0;
    var moveY = 0;

    //滑动中的距离
    var distanceY = 0;
    //当前停止的位置
    var currentY = 0;
    var maxPosition = 0;
    var minPosition = -(categoryLeftUl.offsetHeight - categoryLeft.offsetHeight);

    //允许滑动的距离
    var buffer = 100;
    var maxSwipe = maxPosition + buffer;
    var minSwipe = minPosition - buffer;

    categoryLeftUl.addEventListener("touchstart", function (e) {
        startY = e.touches[0].clientY;
    });
    categoryLeftUl.addEventListener("touchmove", function (e) {
        moveY = e.touches[0].clientY;
        distanceY = moveY - startY;
        //当移动的距离符合最大、最小的移动的距离时，才让它移动
        if (currentY + distanceY < maxSwipe && currentY + distanceY > minSwipe) {
            //移动当前滑动的距离加上记录上次滑动的位置
            translateY(currentY + distanceY);
            removeTransition();
        }
    });
    categoryLeftUl.addEventListener("touchend", function (e) {
        //滑动完成后记录当前的停止的位置
        currentY += distanceY;
        if (currentY + distanceY > maxSwipe) {
            currentY = maxPosition;
            translateY(currentY);
            addTransition();
        } else if (currentY + distanceY < minSwipe) {
            currentY = minPosition;
            translateY(currentY);
            addTransition();
        }
    });


    categoryLeftUl.addEventListener("click", function (e) {
        for (var i = 0; i < lis.length; i++) {
            lis[i].className = "";
            lis[i].index = i;
        }
        console.log(e);
        //e.target为a标签，e.target.parentNode就可以拿到li标签
        e.target.parentNode.className = "row";

        console.log(e.target.parentNode.index)
        currentY = -e.target.parentNode.index * 50;
        if (currentY > minPosition) {
            translateY(currentY);
            addTransition();
        } else {
            currentY = minPosition;
            translateY(currentY);
            addTransition();
        }
    });


    //滑动函数
    function translateY(y) {
        categoryLeftUl.style.transform = "translateY(" + y + "px)";
    }

    //添加过渡函数
    function addTransition() {
        categoryLeftUl.style.transition = "all 0.2s";
    }

    //清楚过渡函数
    function removeTransition() {
        categoryLeftUl.style.transition = "none";
    }
}
function swipeRight() {


    var categoryLeft = document.querySelector(".category-right");
    var categoryLeftUl = categoryLeft.querySelector(".category-rightProduct");

    //开始和结束位置
    var startY = 0;
    var moveY = 0;

    //滑动中的距离
    var distanceY = 0;
    //当前停止的位置
    var currentY = 0;
    var maxPosition = 0;
    var minPosition = -(categoryLeftUl.offsetHeight - categoryLeft.offsetHeight);

    //允许滑动的距离
    var buffer = 100;
    var maxSwipe = maxPosition + buffer;
    var minSwipe = minPosition - buffer;

    categoryLeftUl.addEventListener("touchstart", function (e) {
        startY = e.touches[0].clientY;
    });
    categoryLeftUl.addEventListener("touchmove", function (e) {
        moveY = e.touches[0].clientY;
        distanceY = moveY - startY;
        //当移动的距离符合最大、最小的移动的距离时，才让它移动
        if (currentY + distanceY < maxSwipe && currentY + distanceY > minSwipe) {
            //移动当前滑动的距离加上记录上次滑动的位置
            translateY(currentY + distanceY);
            removeTransition();
        }
    });
    categoryLeftUl.addEventListener("touchend", function (e) {
        //滑动完成后记录当前的停止的位置
        currentY += distanceY;
        if (currentY + distanceY > maxSwipe) {
            currentY = maxPosition;
            translateY(currentY);
            addTransition();
        } else if (currentY + distanceY < minSwipe) {
            currentY = minPosition;
            translateY(currentY);
            addTransition();
        }
    });


    //滑动函数
    function translateY(y) {
        categoryLeftUl.style.transform = "translateY(" + y + "px)";
    }

    //添加过渡函数
    function addTransition() {
        categoryLeftUl.style.transition = "all 0.2s";
    }

    //清楚过渡函数
    function removeTransition() {
        categoryLeftUl.style.transition = "none";
    }
}

