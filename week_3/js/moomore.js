/* MooTools: the javascript framework. license: MIT-style license. copyright: Copyright (c) 2006-2016 [Valerio Proietti](http://mad4milk.net/).*/ 
/*!
Web Build: http://mootools.net/more/builder/1b84f78e3952c74d74d3e2d3be481364
*/
MooTools.More={version:"1.6.0",build:"45b71db70f879781a7e0b0d3fb3bb1307c2521eb"},function(){function t(t){return/^(?:body|html)$/i.test(t.tagName)}Fx.Scroll=new Class({Extends:Fx,options:{offset:{x:0,y:0},wheelStops:!0},initialize:function(t,e){if(this.element=this.subject=document.id(t),this.parent(e),"element"!=typeOf(this.element)&&(this.element=document.id(this.element.getDocument().body)),this.options.wheelStops){var n=this.element,i=this.cancel.pass(!1,this);this.addEvent("start",function(){n.addEvent("mousewheel",i)},!0),this.addEvent("complete",function(){n.removeEvent("mousewheel",i)},!0)}},set:function(){var t=Array.flatten(arguments);return this.element.scrollTo(t[0],t[1]),this},compute:function(t,e,n){return[0,1].map(function(i){return Fx.compute(t[i],e[i],n)})},start:function(t,e){if(!this.check(t,e))return this;var n=this.element.getScroll();return this.parent([n.x,n.y],[t,e])},calculateScroll:function(t,e){var n=this.element,i=n.getScrollSize(),o=n.getScroll(),s=n.getSize(),l=this.options.offset,r={x:t,y:e};for(var c in r)r[c]||0===r[c]||(r[c]=o[c]),"number"!=typeOf(r[c])&&(r[c]=i[c]-s[c]),r[c]+=l[c];return[r.x,r.y]},toTop:function(){return this.start.apply(this,this.calculateScroll(!1,0))},toLeft:function(){return this.start.apply(this,this.calculateScroll(0,!1))},toRight:function(){return this.start.apply(this,this.calculateScroll("right",!1))},toBottom:function(){return this.start.apply(this,this.calculateScroll(!1,"bottom"))},toElement:function(e,n){n=n?Array.convert(n):["x","y"];var i=t(this.element)?{x:0,y:0}:this.element.getScroll(),o=Object.map(document.id(e).getPosition(this.element),function(t,e){return n.contains(e)?t+i[e]:!1});return this.start.apply(this,this.calculateScroll(o.x,o.y))},toElementEdge:function(t,e,n){e=e?Array.convert(e):["x","y"],t=document.id(t);var i={},o=t.getPosition(this.element),s=t.getSize(),l=this.element.getScroll(),r=this.element.getSize(),c={x:o.x+s.x,y:o.y+s.y};return["x","y"].each(function(t){e.contains(t)&&(c[t]>l[t]+r[t]&&(i[t]=c[t]-r[t]),o[t]<l[t]&&(i[t]=o[t])),null==i[t]&&(i[t]=l[t]),n&&n[t]&&(i[t]=i[t]+n[t])},this),(i.x!=l.x||i.y!=l.y)&&this.start(i.x,i.y),this},toElementCenter:function(t,e,n){e=e?Array.convert(e):["x","y"],t=document.id(t);var i={},o=t.getPosition(this.element),s=t.getSize(),l=this.element.getScroll(),r=this.element.getSize();return["x","y"].each(function(t){e.contains(t)&&(i[t]=o[t]-(r[t]-s[t])/2),null==i[t]&&(i[t]=l[t]),n&&n[t]&&(i[t]=i[t]+n[t])},this),(i.x!=l.x||i.y!=l.y)&&this.start(i.x,i.y),this}}),Fx.Scroll.implement({scrollToCenter:function(){return this.toElementCenter.apply(this,arguments)},scrollIntoView:function(){return this.toElementEdge.apply(this,arguments)}})}();