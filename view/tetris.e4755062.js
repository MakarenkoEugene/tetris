parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"wq74":[function(require,module,exports) {
"use strict";function n(){let n=0+Math.random()*(this.figure.length-1);switch(n=Math.round(n),this.figure[n]){case"pyramid":this.nawOperand=i(this);break;case"band":this.nawOperand=a(this);break;case"hookLeft":this.nawOperand=r(this);break;case"hookRight":this.nawOperand=p(this);break;case"square":this.nawOperand=e(this);break;case"figureS":this.nawOperand=s(this);break;case"figureZ":this.nawOperand=o(this)}}function e(n){return{name:"square",styleName:"purple",y:[0,0,1,1],x:[0,1,0,1],spine:()=>{console.log("spin")}}}function a(n){return{name:"band",styleName:"red",position:0,x:[0,0,0,0],y:[0,1,2,3],spine:()=>{switch(n.nawOperand.position){case 1:n.nawOperand.position=0,n.nawOperand.x=[0,0,0,0],n.nawOperand.y=[0,1,2,3];break;case 0:n.nawOperand.position=1,n.nawOperand.x=[0,1,2,3],n.nawOperand.y=[0,0,0,0]}for(let e=0;e<4;e+=1){if(n.checkMap())return console.log("spin"),void n.moveStep();n.positionX-=1}}}}function i(n){return{name:"pyramid",styleName:"skyblue",position:0,y:[0,0,0,1],x:[0,1,2,1],spine:()=>{switch(n.nawOperand.position){case 3:n.nawOperand.position=0,n.nawOperand.y=[0,0,0,1],n.nawOperand.x=[0,1,2,1];break;case 0:n.nawOperand.position=1,n.nawOperand.y=[0,1,2,1],n.nawOperand.x=[0,0,0,1];break;case 1:n.nawOperand.position=2,n.nawOperand.y=[1,1,1,0],n.nawOperand.x=[0,1,2,1];break;case 2:n.nawOperand.position=3,n.nawOperand.y=[0,1,2,1],n.nawOperand.x=[1,1,1,0]}for(let e=0;e<4;e+=1){if(n.checkMap())return console.log("spin"),void n.moveStep();n.positionX-=1}}}}function r(n){return{name:"hookLeft",styleName:"green",position:0,y:[0,1,2,2],x:[1,1,1,0],spine:()=>{switch(n.nawOperand.position){case 3:n.nawOperand.position=0,n.nawOperand.y=[0,1,2,2],n.nawOperand.x=[1,1,1,0];break;case 0:n.nawOperand.position=1,n.nawOperand.y=[0,0,0,1],n.nawOperand.x=[0,1,2,2];break;case 1:n.nawOperand.position=2,n.nawOperand.y=[0,1,2,0],n.nawOperand.x=[0,0,0,1];break;case 2:n.nawOperand.position=3,n.nawOperand.y=[1,1,1,0],n.nawOperand.x=[0,1,2,0]}for(let e=0;e<4;e+=1){if(n.checkMap())return console.log("spin"),void n.moveStep();n.positionX-=1}}}}function p(n){return{name:"hookRight",styleName:"yellow",position:0,y:[0,1,2,2],x:[0,0,0,1],spine:()=>{switch(n.nawOperand.position){case 3:n.nawOperand.position=0,n.nawOperand.y=[0,1,2,2],n.nawOperand.x=[0,0,0,1];break;case 0:n.nawOperand.position=1,n.nawOperand.y=[0,0,0,1],n.nawOperand.x=[0,1,2,0];break;case 1:n.nawOperand.position=2,n.nawOperand.y=[0,1,2,0],n.nawOperand.x=[1,1,1,0];break;case 2:n.nawOperand.position=3,n.nawOperand.y=[1,1,1,0],n.nawOperand.x=[0,1,2,2]}for(let e=0;e<4;e+=1){if(n.checkMap())return console.log("spin"),void n.moveStep();n.positionX-=1}}}}function o(n){return{name:"figureZ",styleName:"blue",position:0,y:[0,0,1,1],x:[0,1,1,2],spine:()=>{switch(n.nawOperand.position){case 1:n.nawOperand.position=0,n.nawOperand.y=[0,0,1,1],n.nawOperand.x=[0,1,1,2];break;case 0:n.nawOperand.position=1,n.nawOperand.y=[0,1,1,2],n.nawOperand.x=[1,1,0,0]}for(let e=0;e<4;e+=1){if(n.checkMap())return console.log("spin"),void n.moveStep();n.positionX-=1}}}}function s(n){return{name:"figureS",styleName:"orange",position:0,y:[1,1,0,0],x:[0,1,1,2],spine:()=>{switch(n.nawOperand.position){case 1:n.nawOperand.position=0,n.nawOperand.y=[1,1,0,0],n.nawOperand.x=[0,1,1,2];break;case 0:n.nawOperand.position=1,n.nawOperand.y=[0,1,1,2],n.nawOperand.x=[0,0,1,1]}for(let e=0;e<4;e+=1){if(n.checkMap())return console.log("spin"),void n.moveStep();n.positionX-=1}}}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=n;
},{}],"iNO4":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;class t{constructor(t){this.root=t.root,this.figure=t.figure||["pyramid","band","hookLeft","hookRight","square","figureS","figureZ"],this.getRandomFigure=t.getRandomFigure,this.speed=t.speed||500,this.widthRoot=root.children[0].childElementCount-1,this.heightRoot=root.childElementCount-1,this.start=!0,this.nawOperand=null,this.positionY=t.positionX||0,this.positionX=t.positionX||4,this.interval=null,this.init()}gameOver(){this.start=!1,this.gravities(!1);const t=this.root.getElementsByClassName(this.nawOperand.styleName);t[0].classList.remove(this.nawOperand.styleName),t[0].classList.remove(this.nawOperand.styleName),t[0].classList.remove(this.nawOperand.styleName),t[0].classList.remove(this.nawOperand.styleName);let i=0;const s=[4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,15,15,15,15,15,15,15,15],e=[1,2,5,9,11,14,15,16,0,4,6,8,10,12,14,0,4,5,6,8,12,14,15,16,0,2,4,6,8,12,14,1,2,4,6,8,12,14,15,16,1,2,5,7,9,10,11,13,14,15,0,3,5,7,9,13,15,0,3,5,7,9,10,11,13,14,0,3,5,7,9,13,15,1,2,6,9,10,11,13,15],n=["red","green","yellow","purple","skyblue","orange","blue"];let o=0,r=0;!function t(l){var h,a;r===s[i]&&o===e[i]?(l.root.children[r].children[o].classList="",i+=1):l.root.children[r].children[o].classList=n[(h=0,a=7,Math.floor(Math.random()*(a-h))+h)],17===(o+=1)&&(o=0,r+=1),setTimeout(()=>t(l),20)}(this)}gravities(t){if(t)return console.log(this.nawOperand),console.log(this.positionX),console.log(this.positionY),void(this.interval=setInterval(()=>{this.goDown()},this.speed));clearInterval(this.interval)}_addControls(){document.addEventListener("keydown",t=>this._clickSorting(t.keyCode))}_clickSorting(t){if(this.start)switch(t){case 65:this.goLeft();break;case 87:this.nawOperand.spine();break;case 68:this.goRight();break;case 83:this.goDown();break;default:console.log(t)}else console.log("gg")}goLeft(){this.positionX-=1,this.checkMap()?this.moveStep():this.positionX+=1}goRight(){this.positionX+=1,this.checkMap()?this.moveStep():this.positionX-=1}goDown(){this.positionY+=1,this.checkMap(!0)?this.moveStep():this.positionY-=1}_findClassIn(t,i){"string"==typeof t&&(t=t.split(" "));let s=!1;for(var e=0;e<t.length;e+=1)t[e]===i&&(s=!0);return s}checkMap(t){if(t){for(let t=0;t<4;t+=1){const i=this.positionX+this.nawOperand.x[t],s=this.positionY+this.nawOperand.y[t];if(!this.root.children[s])return this.turningIntoWall(),!1;if(this._findClassIn(this.root.children[s].children[i].classList.value,"wall"))return this.turningIntoWall(),!1}return!0}for(let i=0;i<4;i+=1){const t=this.positionX+this.nawOperand.x[i],s=this.positionY+this.nawOperand.y[i];if(!this.root.children[s].children[t])return!1;if(this._findClassIn(this.root.children[s].children[t].classList.value,"wall"))return!1}return!0}moveStep(){const t=document.getElementsByClassName(this.nawOperand.styleName),i=[];for(let s=0;s<t.length;s++){this._findClassIn(t[s].classList.value,"wall")||i.push(t[s])}if(i.length)for(let s=i.length-1;s>=0;s-=1)i[s].classList.remove(this.nawOperand.styleName);for(let s=0;s<4;s+=1){const t=this.positionX+this.nawOperand.x[s],i=this.positionY+this.nawOperand.y[s];this.root.children[i].children[t].classList.add(this.nawOperand.styleName)}}removalCheck(){let t=[];const i=this.root,s=i.childElementCount-1,e=i.children[0].childElementCount-1;for(let o=s;o>=0;o-=1){function n(){for(let t=e;t>=0;t-=1)if(!i.children[o].children[t].classList.length)return!1;return!0}n()&&t.push(o)}return t.length&&this.rowCleaning(t),!0}pressDown(t){let i=null;for(let s=t-1;s>=0;s-=1){if(!(i=this.root.children[s].getElementsByClassName("wall")).length)return;for(let t=i.length-1;t>=0;t-=1){const e=i[t].classList.value,n=i[t].cellIndex;i[t].classList.value="",this.root.children[s+1].children[n].classList=e}}}rowCleaning(t){this.gravities(!1);let i=0;const s=e=>{let n=0;const o=()=>{this.root.children[e].children[n].classList="",(n+=1)<=this.widthRoot?setTimeout(()=>o(),20):(this.pressDown(t[i]+i),t[i+=1]?s(t[i]+i):this.gravities(!0))};o()};s(t[i])}turningIntoWall(){!function(){try{throw new Error("Моя ошибка")}catch(t){console.log(t.stack)}}();for(let t=0;t<4;t+=1){const i=this.positionX+this.nawOperand.x[t],s=this.positionY+this.nawOperand.y[t]-1;if(0===s)return void this.gameOver();this.root.children[s].children[i].classList.add("wall")}this.removalCheck()&&this.createOperand()}createOperand(){this.positionX=4,this.positionY=0,this.getRandomFigure(),this.moveStep(),this.positionY=1}init(){this._addControls(),this.gravities(!0),this.getRandomFigure(),this.moveStep()}}exports.default=t;
},{}],"WrFz":[function(require,module,exports) {
"use strict";var e=n(require("./getRandomFigure")),t=n(require("./api"));function n(e){return e&&e.__esModule?e:{default:e}}const i=["band","square"],r=new t.default({root:document.getElementById("root"),getRandomFigure:e.default,figure:i}),u=document.getElementById("speed"),o=document.querySelectorAll('.options input[type="button"]'),d=document.getElementById("options");let s=!1;d.addEventListener("mouseenter",e=>{r.gravities(!1)}),d.addEventListener("mouseleave",e=>{r.gravities(!0)}),u.addEventListener("input",()=>{console.log(u.value)}),u.addEventListener("change",()=>{r.speed=u.value});for(let c=0;c<o.length;c+=1)o[c].addEventListener("click",()=>{l(o[c].id),o[c].classList.toggle("activeFigure")});function a(){i.forEach(e=>{for(let t=0;t<7;t+=1)o[t].id===e&&o[t].classList.add("activeFigure")})}function l(e){let t=!0;i.forEach((n,u)=>{n===e&&(t=!1,i.splice(u,1),r.figures=i)}),t&&(i.push(e),r.figures=i)}a();
},{"./getRandomFigure":"wq74","./api":"iNO4"}]},{},["WrFz"], null)
//# sourceMappingURL=/riverbird/view/tetris.e4755062.js.map