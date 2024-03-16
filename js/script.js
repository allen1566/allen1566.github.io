document.addEventListener('DOMContentLoaded', function () {
    // 处理基于体系结构的下载的函数
    
    function downloadFile(architecture) {
        var downloadLink;

        switch (architecture) {
            case 'x64':
                downloadLink = '/appzip/SMCL-x64-setup_allen1566.zip';
                break;
            case 'x86':
                downloadLink = '/appzip/SMCL-x86-setup_allen1566.zip';
                break;
            case 'arm64':
                downloadLink = '/appzip/SMCL-arm64-setup_allen1566.zip';
                break;
            default:
                // 处理其他情况或错误
                return;
        }

        // 创建一个隐藏的链接并触发下载
        var link = document.createElement('a');
        link.href = downloadLink;
        link.download = 'SMCL.zip'; // 您可以设置下载文件的默认名称
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    // 为下载按钮附加点击事件监听器
    var x64Button = document.querySelector('.downloadx64-button');
    var x86Button = document.querySelector('.downloadx86-button');
    var arm64Button = document.querySelector('.downloadarm64-button');

    x64Button.addEventListener('click', function () {
        downloadFile('x64');
    });

    x86Button.addEventListener('click', function () {
        downloadFile('x86');
    });

    arm64Button.addEventListener('click', function () {
        downloadFile('arm64');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // 处理重定向的函数
    function redirectTo(url) {
        window.location.href = url;
    }

    // 为按钮添加点击事件监听器
    document.querySelector(".feedback-button1").addEventListener("click", function() {
        // 当第一个按钮被点击时，跳转
        redirectTo("/fankui.html");
    });

    document.querySelector(".feedback-button2").addEventListener("click", function() {
        // 当第二个按钮被点击时，跳转
        redirectTo("/kefu.html");
    });
});