"use strict";
var ContentFlipper = class {
    
    constructor(el){
        this.element = document.getElementById(el);
        
        this.navTags = this.element.querySelector("ul").querySelectorAll("li");
        this.contentSections = this.element.querySelectorAll(".content > section");
        
        this.hideAllSections();
        
        for(var i = 0; i < this.navTags.length;++i){
            this.navTags[i].addEventListener("click", this.navClicked.bind(this));
        }
    }
    
    navClicked(e){
        e.stopPropagation();
        
        for(var i = 0; i < this.navTags.length;++i){
            if(this.navTags[i] == e.target){
                 this.contentSections[i].style.display = null;
            }else{
                 this.contentSections[i].style.display = "none";
            }
        }
    }
    
    hideAllSections(){
        for(var i = 0; i < this.contentSections.length;++i){
            this.contentSections[i].style.display = "none";
        }
    }
    
};