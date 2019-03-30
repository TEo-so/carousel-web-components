customElements.define('img-slider',
  class extends HTMLElement {
    constructor() {
      super();
      const template = document.getElementById('img-slider');
      const templateContent = template.content;
      this.attachShadow({mode: 'open'}).appendChild(
      templateContent.cloneNode(true)
        );
        var clone = document.importNode(template.content, true);
        console.log(clone);
        var wrap = clone.querySelector('.wrap');
        var next = clone.querySelector('.arrow_right');
        var prev = clone.querySelector('.arrow_left');
        var container = clone.querySelector('.container');
        var dots = clone.querySelectorAll('span');
        var index = 0;
        next.addEventListener('click',() => {
          next_pic();
          console.log("下一张");
         })
         prev.addEventListener('click', () => {
           prev_pic();
           console.log("上一张");
          })
        
       
          function showCurrentDot() {
            for(var i=0, len=dots.length; i<len; i++){
              dots[i].className = "";
            }
            dots[index].className = "on";
          }
        
          function next_pic(){
            var newLeft;
           if(wrap.style.left === "-3198px") {
              newLeft = -1066;
            }else {
              newLeft = parseInt(wrap.style.left)-533;
            }
            wrap.style.left = newLeft + "px";
            console.log(wrap.style.left)
            index++;
            if(index>4){index = 0;}
            showCurrentDot();
          }
        
          function prev_pic(){
            var newLeft;
            if (wrap.style.left === "0px") {
              newLeft = -2132;
            }else {
              newLeft = parseInt(wrap.style.left)+533;
            }
            wrap.style.left = newLeft + "px";
        
            index--;
            if (index<0) {index = 4;}
            showCurrentDot();
          }
          //定时器
      var timer = null;
      function autoPlay() {
        timer = setInterval(function() {
          next_pic();
        },2000);
      }
      autoPlay();
    
    container.onmouseenter = function() {
        clearInterval(timer);
      
      }
      container.onmouseleave = function() {
        autoPlay();
       
      }
    
      
    
    }  
    
  }
  
  )
  
      
      
      



