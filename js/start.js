document.addEventListener("DOMContentLoaded", function() {
    // 处理重定向的函数
    function redirectTo(url) {
        window.location.href = url;
    }

    // 为按钮添加点击事件监听器
    document.querySelector("#main_btn button").addEventListener("click", function() {
        // 当第一个按钮被点击时，跳转
        redirectTo("/home.html");
    });


});

//____,启动！
function playAudio() {
    // 获取音频元素
    var audio = document.getElementById("startAUD");

    // 检查音频是否已经在播放，如果是则暂停，否则播放
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

