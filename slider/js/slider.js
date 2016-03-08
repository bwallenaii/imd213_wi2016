//(function(){
    "use strict";    
    
    class Slider {
        
        constructor(el){
            if(!(el instanceof HTMLElement)){
                throw new Error("This is not an element. Please provide a true element.");
            }
            this.element = el;
            this.window = this.element.querySelector("ul");
            this.slides = this.window.querySelectorAll("li");
            this.leftButton = this.element.querySelector(".left-button");
            this.rightButton = this.element.querySelector(".right-button");
            this.currentPosition = 0;
            
            this.leftButton.addEventListener("click", this.goLeft.bind(this));
            this.rightButton.addEventListener("click", this.goRight.bind(this));
            
            this.setSlide();
            
            this.autoSlide = setInterval(this.moveRight.bind(this), 4000);
        }
        
        goLeft(ev){
            ev.stopPropagation();
            this.moveLeft();
            clearInterval(this.autoSlide);
            return false; //Y no stopProp?
        }
        
        moveLeft(){
            this.currentPosition -= 1;
            
            if(this.currentPosition < 0){
                this.currentPosition = this.slides.length -1;
            }
            this.setSlide();
        }
        moveRight(){
            this.currentPosition += 1;
            if(this.currentPosition > this.slides.length -1){
                this.currentPosition = 0;
            }
            this.setSlide();
        }
        
        goRight(ev){
            ev ? ev.stopPropagation():null;
            this.moveRight();
            clearInterval(this.autoSlide);
            return false; //Y no stopProp?
        }
        
        setSlide(){
            for(var i = 0; i < this.slides.length;i += 1){
                if(i == this.currentPosition){
                    this.slides[i].classList.add("active");
                }else{
                    this.slides[i].classList.remove("active");
                }
                
                if(i > this.currentPosition){
                    this.slides[i].classList.add("right");
                }else{
                    this.slides[i].classList.remove("right");
                }
            }
        }
    }


//})();