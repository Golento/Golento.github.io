window.onload = function () {
    var json = [
        {   //  1
            width:400,
            top:70,
            left:50,
            opacity:20,
            zIndex:2
        },
        {  // 2
            width:600,
            top:120,
            left:0,
            opacity:80,
            zIndex:3
        },
        {   // 3
            width:800,
            top:100,
            left:200,
            opacity:100,
            zIndex:4
        },
        {  // 4
            width:600,
            top:120,
            left:600,
            opacity:80,
            zIndex:3
        },
        {   //5
            width:400,
            top:70,
            left:750,
            opacity:20,
            zIndex:2
        }
    ];
    var slide = document.getElementById("slide");
    var arrow = document.getElementById("arrow");
    var liArr = document.getElementsByTagName("li");
    var arrowChildren = arrow.children;
    var flag = true;
    slide.onmouseenter = function () {
        animate(arrow,{
            "opacity":100
        })
    }
    slide.onmouseleave = function () {
        animate(arrow,{
            "opacity":0
        })
    }
    //页面加载的时候，给图片显示初始属性
    // for(var i = 0;i<json.length;i++){
    //     animate(liArr[i],{
    //         "width":json[i].width,
    //         "top":json[i].top,
    //         "left":json[i].left,
    //         "opacity":json[i].opacity,
    //         "zIndex":json[i].zIndex
    //     })
    // }
    move();
    //给arrow绑定事件，利用for....in，给定一个参数，如果为true,正向旋转，如果为false,反向旋转
    for(var k in arrowChildren){
        arrowChildren[k].onclick = function () {
            if(this.className === "prev"){
                //防止多次点击，图片没到指定位置就执行下一个点击事件。
                if(flag === true){
                    flag = false;
                    move(true)
                }
            }else{
                if(flag){
                    flag =false;
                    move(false)
                }
            }
        }
    }
    function move (bool) {
        if(bool!==undefined){
            if(bool===true){
                json.unshift(json.pop());
            }else{
                json.push(json.shift());
            }
        }
        for(var i = 0;i<json.length;i++){
            animate(liArr[i],json[i],function () {
                //在一次点击事件全部执行完毕以后，再重新复制flag的值，可以继续下一次点击。
                flag = true;
            })
        }
    }




}