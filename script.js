var page1 = document.getElementsByClassName("page_one");

// 防抖缓冲函数
function Ctime(func, delay) {
    let timer;
    return function () {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => { func() }, delay);
    }
};

// 动态调整函数
function P_size() {
    page1[0].style.height = "1px";
    page1[0].style.height = document.documentElement.clientHeight;
    page1[0].style.width = document.documentElement.clientWidth;
    page1[0].style.display = "flex";
    console.log("successful");
};


// 事件注册
window.addEventListener("resize", Ctime(P_size, 200));

// 加载调用
P_size();