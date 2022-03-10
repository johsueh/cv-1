let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string = `/*大家好
*接下来演示下如何绘制太极八卦图
*首先准备一个div
*/
#div1{
    border: 1px solid red;
    width: 40vw;
    height: 40vw;
    }

/*接下来把div变成一个八卦图
*注意看好了
*首先把div变成一个圆
*/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    border: none;
    }
/*八卦是阴阳形成的
*一黑一白
*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
    }
/*加两个圆*/
#div1::before{
    width: 20vw;
    height: 20vw;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%, rgba(0,0,0,1) 100%);
    }
#div1::after{
    width: 20vw;
    height: 20vw;
    left: 50%;
    transform: translate(-50%, 100%); 
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
    }
/* 接着让太极转动起来吧
*/
@keyframes spin {
    0% {   
        transform:  rotate(0deg);
    }
    100% {      
        transform: rotate(360deg);
    }
}
#div1 {
    animation: spin 6s linear infinite;
}
   

`;

let string2 = ''
let n = 0

let step = () => {
    setTimeout(() => {
        if (string[n] === "\n") {
            string2 += "<br>";
        } else if (string[n] === " ") {
            string2 += "&nbsp;";
        } else {
            string2 += string[n];
        }

        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        html.scrollTo(0,9999);
        // html.scrollIntoView(false);
        if (n < string.length - 1) {
            n += 1;
            step();
        }
    }, 50)
};

step();
