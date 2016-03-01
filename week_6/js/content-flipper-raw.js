(function(){
"use strict";
var ContentFlipper = class {
    
    constructor(el, options){
        this.element = document.getElementById(el);
        
        this.options = {
            contentSectionSelector: "section"
        };
        
        this.mergeOptions(options);
        
        this.navTags = this.element.querySelector("ul").querySelectorAll("li");
        this.contentSections = this.element.querySelectorAll(".content > " + this.options.contentSectionSelector);
        
        this.hideAllSections();
        
        for(var i = 0; i < this.navTags.length;++i){
            this.navTags[i].addEventListener("click", this.navClicked.bind(this));
        }
    }
    
    mergeOptions(opts){
        for(var optName in opts){
           this.options[optName] = opts[optName]; 
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
    
})();