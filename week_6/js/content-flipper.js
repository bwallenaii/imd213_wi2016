var ContentFlipper = new Class({
    
    Implements: [Options, Events],
    
    options: {
        contentSectionSelector: "section"
    },
    
    initialize: function(el, opts){
        this.element = document.id(el);
        this.setOptions(opts);
        
        this.navTags = this.element.getElement("ul").getElements("li");
        this.contentBlock = this.element.getElement(".content");
        this.contentSections = this.contentBlock.getChildren(this.options.contentSectionSelector);
        
        //hide content sections
        this.contentSections.setStyle("display", "none");
        this.navTags.addEvent("click", this.navClicked.bind(this));
    },
    
    navClicked: function(e){
        e.stop();
        this.contentSections.setStyle("display", "none");
        for(var i = 0; i < this.navTags.length;++i){
            if(this.navTags[i] == e.target){
                this.contentSections[i].setStyle("display", null);
                break; 
            }
        }
    }
    
});