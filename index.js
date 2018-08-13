window.onload = function () {
    var json = [
        {   //  1
            width:400,
            top:70,
            left:50,
            opacity:20,
            z:2
        },
        {  // 2
            width:600,
            top:120,
            left:0,
            opacity:80,
            z:3
        },
        {   // 3
            width:800,
            top:100,
            left:200,
            opacity:100,
            z:4
        },
        {  // 4
            width:600,
            top:120,
            left:600,
            opacity:80,
            z:3
        },
        {   //5
            width:400,
            top:70,
            left:750,
            opacity:20,
            z:2
        }
    ];

    var slide = document.getElementById("slide");
    var arrow = slide.children[1];
    var arrowChildren = arrow.children;
    var liArr = document.getElementsByTagName("li");
    var flag = true;
    slide.onmouseenter = function(){
        animate(arrow,{
            "opacity":100
        })
    }
    slide.onmouseleave = function(){
        animate(arrow,{
            "opacity":0
        })
    }
    //这里如果调用move函数，不加参数的话，默认是undefined,即为false,执行了一次函数
    //因此要在下面的函数中，当bool不等于undefined的时候，才执行true和false.
    move();
    //调用同一个方法，只有一个参数，true为正向旋转，false为反向
    for(var k in arrowChildren){
        arrowChildren[k].onclick = function () {
            if(this.className === "prev"){
                //开闭原则，进行判断
                if(flag===true){
                    flag = false;
                    move(true);
                }
            }else{
                if(flag){
                    flag =false;
                    move(false);
                }

            }
        }
    }

    function move (bool) {
        //判断，如果等于undfined，那么就不执行下面的函数
        if(bool === true || bool ===false)
        // if(bool!==undefined)两种写法都可以
        {
            if(bool === true){
                json.unshift(json.pop());
            }else{
                json.push(json.shift());
            }
        }
        for (var i = 0; i < json.length; i++) {
            animate(liArr[i], {
                "width": json[i].width,
                "top": json[i].top,
                "left": json[i].left,
                "opacity": json[i].opacity,
                "zIndex": json[i].z
            },function () {
                //当执行到这个函数的时候，表明前面的代表已经执行完毕，图片已到指定位置
                //这时再给flag赋值，可以重新执行代码。
                flag = true;
            })
        }
    }



}