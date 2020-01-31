!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.theaterJS=t():e.theaterJS=t()}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([/*!**************************!*\
  !*** ./src/theaterJS.js ***!
  \**************************/
function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function u(e){return Array.isArray(e)?e:Array.from(e)}function o(){function e(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],r=arguments.length<=2||void 0===arguments[2]?null:arguments[2],n=(0,s["default"])(e,t,r);return N.casting[n.name]=n,this}function t(e){return N.onStage=e,this}function r(){return N.casting[N.onStage]||null}function n(){function e(r){if(d["default"].isArray(r)&&r.forEach(function(t){e(t)}),d["default"].isString(r)){var n=r.split(":"),a=void 0;n.length>1&&"\\"!==n[0].charAt(n[0].length-1)&&(a=n.shift(),e({name:"erase",actor:a}));var u=n.join(":").replace(/\\:/g,":"),o={name:"type",args:[u]};null!=a&&(o.actor=a),e(o)}d["default"].isFunction(r)&&e({name:"callback",args:[r]}),d["default"].isNumber(r)&&e(r>0?{name:"wait",args:[r]}:{name:"erase",args:[r]}),d["default"].isObject(r)&&(d["default"].isArray(r.args)||(r.args=[]),r.args.unshift(function(){j(r.name+":end",r),c()}),t.push(r))}for(var t=[],r=arguments.length,n=Array(r),a=0;r>a;a++)n[a]=arguments[a];return e([{name:"publisher",args:["sequence:start"]}].concat(n).concat({name:"publisher",args:["sequence:end"]})),Array.prototype.push.apply(N.scenario,t),N.options.autoplay&&o(),this}function o(){return"stopping"===N.status&&(N.status="playing"),"ready"===N.status&&(N.status="playing",c()),this}function i(e){return("ready"===N.status||d["default"].isFunction(e))&&(N.currentScene=-1,"ready"===N.status?o():e()),this}function l(){return N.status="stopping",this}function c(){if("stopping"===N.status)return N.status="ready",this;if("playing"!==N.status)return this;if(N.currentScene+1>=N.scenario.length)return N.status="ready",j("scenario:end"),this;var e=N.scenario[++N.currentScene];if(0===N.currentScene&&j("scenario:start"),"publisher"===e.name){var r=u(e.args),n=r[0],o=r.slice(1);return j.apply(void 0,a(o)),n()}switch(e.actor&&t(e.actor),j(e.name+":start",e),e.name){case"type":p.apply(void 0,a(e.args));break;case"erase":h.apply(void 0,a(e.args));break;case"callback":b.apply(void 0,a(e.args));break;case"wait":x.apply(void 0,a(e.args));break;default:console.debug("No scene handler for "+e.name)}return this}function p(e,t){var n=r(),a=N.options.locale,u=N.options.minSpeed.type,o=N.options.maxSpeed.type,i=n.displayValue,s=-1,l=!1,f=null,c=null,d=m["default"].map(t);return t=m["default"].strip(t),function p(){var r=m["default"].strip(n.displayValue.substr(i.length));if(r===t)return e();var h=t.substr(0,s+1),v=r!==h,y=n.shouldBeMistaken(r,t,f,c),b=l||!y;if(v&&b)l=!0,f=null,n.displayValue=i+m["default"].inject(r.substr(0,r.length-1),d),s--,c=s;else{l=!1;var x=t.charAt(++s);y&&(x=g["default"].randomCharNear(x,a),null==f&&(f=s)),n.displayValue=i+m["default"].inject(r+x,d)}return setTimeout(p,n.getTypingSpeed(u,o))}(),this}function h(e,t){var n=r();if(null==n)return e();if(w.erase!==!0)return n.displayValue="",e();var a=N.options.minSpeed.erase,u=N.options.maxSpeed.erase,o=n.displayValue,i=m["default"].map(o);o=m["default"].strip(o);var s=o.length,l=void 0,f=0;return d["default"].isNumber(t)&&(t>0?l=t:f=o.length+t),function c(){return s===f?e():(n.displayValue=m["default"].inject(o.substr(0,--s),i),setTimeout(c,l||n.getTypingSpeed(a,u)))}(),this}function b(e,t){return t.call(this,e),this}function x(e,t){return setTimeout(e.bind(this),t),this}function S(e,t){return e.split(",").forEach(function(e){e=e.trim(),d["default"].isArray(N.events[e])||(N.events[e]=[]),N.events[e].push(t)}),this}function j(){for(var e=arguments.length,t=Array(e),r=0;e>r;r++)t[r]=arguments[r];var n=t[0],a=N.events[n]||[];return a.length>0&&a.concat(N.events["*"]||[]).forEach(function(e){return e.apply(void 0,t)}),this}var w=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];if(w=f["default"].merge({},y,w),d["default"].isNumber(w.minSpeed)){var A=w,_=A.minSpeed;w.minSpeed={erase:_,type:_}}if(d["default"].isNumber(w.maxSpeed)){var M=w,O=M.maxSpeed;w.maxSpeed={erase:O,type:O}}if("detect"===w.locale&&v){var k=v.languages;d["default"].isArray(k)&&d["default"].isString(k[0])&&(w.locale=k[0].substr(0,2))}g["default"].supports(w.locale)||(w.locale=g["default"].defaultLocale);var N={options:w,casting:{},status:"ready",onStage:null,currentScene:-1,scenario:[],events:{}};return t(null),Object.freeze(Object.defineProperties({addActor:e,getCurrentActor:r,addScene:n,play:o,replay:i,stop:l,on:S},{options:{get:function(){return N.options},configurable:!0,enumerable:!0},status:{get:function(){return N.status},configurable:!0,enumerable:!0}}))}Object.defineProperty(t,"__esModule",{value:!0});var i=r(3),s=n(i),l=r(2),f=n(l),c=r(1),d=n(c),p=r(5),g=n(p),h=r(4),m=n(h),v="undefined"!=typeof window&&window.navigator,y={autoplay:!0,erase:!0,minSpeed:{erase:80,type:80},maxSpeed:{erase:450,type:450},locale:"detect"};o.init=function(){var e=arguments.length<=0||void 0===arguments[0]?"actor":arguments[0],t=o();return t.addActor(e,{accuracy:1,speed:.8}),t},t["default"]=o,e.exports=t["default"]},/*!*****************************!*\
  !*** ./src/helpers/type.js ***!
  \*****************************/
function(e,t){"use strict";function r(e){return{}.toString.call(e)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={isNumber:function(e){return"number"==typeof e},isString:function(e){return"[object String]"===r(e)},isObject:function(e){return"[object Object]"===r(e)},isArray:function(e){return"[object Array]"===r(e)},isFunction:function(e){return"function"==typeof e}},e.exports=t["default"]},/*!******************************!*\
  !*** ./src/helpers/utils.js ***!
  \******************************/
function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={merge:function(e){for(var t=[].slice.call(arguments,1),r=0,n=t.length;n>r;r++){var a=t[r];for(var u in a)a.hasOwnProperty(u)&&(e[u]=a[u])}return e},random:function(e,t){return Math.floor(Math.random()*(t-e+1))+e},randomFloat:function(e,t){return Math.random()*(t-e)+e},getPercentageOf:function(e,t,r){return e-e*r+t*r}},e.exports=t["default"]},/*!**********************!*\
  !*** ./src/actor.js ***!
  \**********************/
function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(1),u=n(a),o=r(2),i=n(o),s="undefined"!=typeof window&&window.document,l={speed:.6,accuracy:.6};t["default"]=function(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],r=arguments.length<=2||void 0===arguments[2]?null:arguments[2],n="",a=void 0;if(u["default"].isNumber(t)&&(t={speed:t,accuracy:t}),t=i["default"].merge({},l,t),s&&(null==r&&(r="#"+e),u["default"].isString(r))){var o=r,f=s.querySelector(o);if(null==f)throw new Error("no matches for "+e+"'s selector: "+o);a=f,r=function(e){a.innerHTML=e}}return u["default"].isFunction(r)||(r=console.log.bind(console)),Object.defineProperties({$element:a,getTypingSpeed:function(e,r){var n=i["default"].randomFloat(t.speed,1);return i["default"].getPercentageOf(r,e,n)},shouldBeMistaken:function(e,r){var n=arguments.length<=2||void 0===arguments[2]?null:arguments[2],a=arguments.length<=3||void 0===arguments[3]?null:arguments[3],o=10*t.accuracy;if(o>=8)return!1;if(e.length<=o)return!1;if(e.length===r.length)return!1;if(u["default"].isNumber(n)){var s=e.length-n,l=o>=6?10-o:4;if(s>=l)return!1}if(u["default"].isNumber(a)){var s=e.length-a,f=2*Math.max(o,2);if(f>=s)return!1}return i["default"].randomFloat(0,.8)>t.accuracy}},{displayValue:{get:function(){return n},set:function(e){n=e,r(e)},configurable:!0,enumerable:!0},name:{get:function(){return e},configurable:!0,enumerable:!0}})},e.exports=t["default"]},/*!*****************************!*\
  !*** ./src/helpers/html.js ***!
  \*****************************/
function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e){var t=e.match(/<([^\s>]+)/);return Boolean(t)&&o["default"].indexOf(t[1].toLowerCase())>-1}Object.defineProperty(t,"__esModule",{value:!0});var u=r(7),o=n(u);t["default"]={strip:function(e){return e.replace(/(<([^>]+)>)/gi,"")},map:function(e){for(var t=/<[^>]+>/gi,r=[],n=[],u=void 0,o=void 0;u=t.exec(e);)o={tagName:u[0],position:u.index},"/"===o.tagName.charAt(1)?o.opener=n.pop():"/"===o.tagName.charAt(o.tagName.length-2)||a(o.tagName)||n.push(o),r.push(o);return r},inject:function(e,t){for(var r=0,n=void 0;r<t.length;r++)n=t[r],e.length>0&&n.position<=e.length?e=e.substr(0,n.position)+n.tagName+e.substr(n.position):n.opener&&n.opener.position<e.length&&(e+=n.tagName);return e}},e.exports=t["default"]},/*!*********************************!*\
  !*** ./src/helpers/keyboard.js ***!
  \*********************************/
function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e){for(var t={},r=0,n=e.length,a=void 0;n>r;r++){a=e[r];for(var u=0,o=a.length;o>u;u++)t[a[u]]={x:u,y:r}}return t}Object.defineProperty(t,"__esModule",{value:!0});var u=r(1),o=n(u),i=r(2),s=n(i),l=r(6),f=n(l),c="en";for(var d in f["default"])if(f["default"].hasOwnProperty(d)){var p=f["default"][d];f["default"][d]={list:p,mapped:a(p)}}t["default"]={defaultLocale:c,supports:function(e){return o["default"].isObject(f["default"][e])},randomCharNear:function(e,t){if(!this.supports(t))throw new Error('locale "'+t+'" is not supported');var r=f["default"][t].mapped,n=1,a=[],u=/[A-Z]/.test(e);e=e.toLowerCase();var o=r[e]||[],i=void 0;for(var l in r)r.hasOwnProperty(l)&&l!==e&&(i=r[l],Math.abs(o.x-i.x)<=n&&Math.abs(o.y-i.y)<=n&&a.push(l));var c=a.length>0?a[s["default"].random(0,a.length-1)]:this.randomChar(t);return u&&(c=c.toUpperCase()),c},randomChar:function(e){if(!this.supports(e))throw new Error('locale "'+e+'" is not supported');var t=f["default"][e].list.join("");return t.charAt(s["default"].random(0,t.length-1))}},e.exports=t["default"]},/*!****************************!*\
  !*** ./src/keyboards.json ***!
  \****************************/
function(e,t){e.exports={en:["qwertyuiop","asdfghjkl","zxcvbnm"],fr:["azertyuiop","qsdfghjklm","wxcvbn"],da:["qwertyuiopå","asdfghjklæø","zxcvbnm"],de:["qwertzuiopü","asdfghjklöä","yxcvbnm"],pl:["qwertyuiopęó","asdfghjkląśł","zxcvbnmżźćń"],pt:["qwertyuiop","asdfghjklç","zxcvbnm"],ru:["йцукенгшщзх","фывапролджэ","ячсмитьбюъ"],es:["qwertyuiop","asdfghjklñ","zxcvbnm"]}},/*!********************************!*\
  !*** ./src/void-elements.json ***!
  \********************************/
function(e,t){e.exports=["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"]}])});
//# sourceMappingURL=theater.min.js.map

/*
 * TheaterJS, a typing effect mimicking human behavior.
 *
 * Github repository: 
 * https://github.com/Zhouzi/TheaterJS
 *
 */

var theater = theaterJS()

theater
  .on('type:start, erase:start', function () {
    theater.getCurrentActor().$element.classList.add('actor__content--typing')
  })
  .on('type:end, erase:end', function () {
    theater.getCurrentActor().$element.classList.remove('actor__content--typing')
  })
  .on('type:start, erase:start', function () {
    if (theater.getCurrentActor().name === 'vader') {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  })

theater
  .addActor('vader', { speed: 0.8, accuracy: 0.6 })
  .addActor('luke')
  .addScene('vader:Luke.', 600)
  .addScene('luke:What?', 400)
  .addScene('vader:I am your father.', 400)
  .addScene('luke:Nooo...', -3, '!!! ', 600, 'No! ', 600)
  .addScene('luke:That\'s not true!', 600)
  .addScene('luke:That\'s impossible!', 400)
  .addScene('vader:Search your feelings.', 1600)
  .addScene('vader:You know it to be true.', 1000)
  .addScene('luke:Noooooooo! ', 600, 'No!', 400)
  .addScene('vader:Luke.', 600)
  .addScene('vader:You can destroy the Emperor.', 1600)
  .addScene('vader:He has foreseen this. ', 800)
  .addScene('vader:It is your destiny.', 1600)
  .addScene('vader:Join me.', 800)
  .addScene('vader:Together we can rule the galaxy.', 800)
  .addScene('vader:As father and son.', 1600)
  .addScene('vader:Come with me. ', 800)
  .addScene('vader:It is the only way.', 2000)
  .addScene(theater.replay.bind(theater))