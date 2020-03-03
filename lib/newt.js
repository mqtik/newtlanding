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
/*
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



*/


(function(){
    var burger = document.querySelector('.burger-container'),
        header = document.querySelector('.header');
    
    burger.onclick = function() {
        header.classList.toggle('menu-opened');
    }
}());
/*

var canvas,
  ctx,
  width,
  height,
  size,
  lines,
  tick;

function line() {
  this.path = [];
  this.speed = rand( 10, 20 );
  this.count = randInt( 10, 30 );
  this.x = width / 2, + 1;
  this.y = height / 2 + 1;
  this.target = { x: width / 2, y: height / 2 };
  this.dist = 0;
  this.angle = 0;
  this.hue = tick / 5;
  this.life = 1;
  this.updateAngle();
  this.updateDist();
}

line.prototype.step = function( i ) {
  this.x += Math.cos( this.angle ) * this.speed;
  this.y += Math.sin( this.angle ) * this.speed;
  
  this.updateDist();
  
  if( this.dist < this.speed ) {
    this.x = this.target.x;
    this.y = this.target.y;
    this.changeTarget();
  }
    
  this.path.push( { x: this.x, y: this.y } ); 
  if( this.path.length > this.count ) {
    this.path.shift();
  }
  
  this.life -= 0.030;
  
  if( this.life <= 0 ) {
    this.path = null;
    lines.splice( i, 1 ); 
  }
};

line.prototype.updateDist = function() {
  var dx = this.target.x - this.x,
    dy = this.target.y - this.y;
  this.dist = Math.sqrt( dx * dx + dy * dy );
}

line.prototype.updateAngle = function() {
  var dx = this.target.x - this.x,
    dy = this.target.y - this.y;
  this.angle = Math.atan2( dy, dx );
}

line.prototype.changeTarget = function() {
  var randStart = randInt( 0, 3 );
  switch( randStart ) {
    case 0: // up
      this.target.y = this.y - size;
      break;
    case 1: // right
      this.target.x = this.x + size;
      break;
    case 2: // down
      this.target.y = this.y + size;
      break;
    case 3: // left
      this.target.x = this.x - size;
  }
  this.updateAngle();
};

line.prototype.draw = function( i ) {
  ctx.beginPath();
  var rando = rand( 0, 10 );
  for( var j = 0, length = this.path.length; j < length; j++ ) {
    ctx[ ( j === 0 ) ? 'moveTo' : 'lineTo' ]( this.path[ j ].x + rand( -rando, rando ), this.path[ j ].y + rand( -rando, rando ) );
  }
  ctx.strokeStyle = 'hsla(' + rand( this.hue, this.hue + 1 ) + ', 80%, 55%, ' + ( this.life / 3 ) + ')';
  ctx.lineWidth = rand( 0.1, 2 );
  ctx.stroke();
};

function rand( min, max ) {
  return Math.random() * ( max - min ) + min;
}

function randInt( min, max ) {
  return Math.floor( min + Math.random() * ( max - min + 1 ) );
};

function init() {
  canvas = document.getElementById( 'canvas' );
  ctx = canvas.getContext( '2d' );
  size = 30;
  lines = [];
  reset();
  loop();
}

function reset() {
  width = Math.ceil( window.innerWidth / 2 ) * 2;
  height = Math.ceil( window.innerHeight / 2 ) * 2;
  tick = 0;
  
  lines.length = 0; 
  canvas.width = width;
  canvas.height = height;
}

function create() {
  if( tick % 10 === 0 ) {   
    lines.push( new line());
  }
}

function step() {
  var i = lines.length;
  while( i-- ) {
    lines[ i ].step( i ); 
  }
}

function clear() {
  ctx.globalCompositeOperation = 'destination-out';
  ctx.fillStyle = 'hsla(0, 0%, 0%, 0.1';
  ctx.fillRect( 0, 0, width, height );
  ctx.globalCompositeOperation = 'lighter';
}

function draw() {
  ctx.save();
  ctx.translate( width / 2, height / 2 );
  ctx.rotate( tick * 0.001 );
  var scale = 0.8 + Math.cos( tick * 0.02 ) * 0.2;
  ctx.scale( scale, scale );
  ctx.translate( -width / 2, -height / 2 );
  var i = lines.length;
  while( i-- ) {
    lines[ i ].draw( i ); 
  }
  ctx.restore();
}

function loop() {
  requestAnimationFrame( loop );
  create();
  step();
  clear();
  draw();
  tick++;
}

function onresize() {
  reset();  
}

window.addEventListener( 'resize', onresize );

init();
*/
//From /codepen.io/jackrugile/pen/bdwvMo



//# sourceURL=pen.js




window.onload = function(argument) {

  // var lyric = "i couldn't take it couldn't stand another minute couldn't bear another day without you in it";
  var lyric = "i couldn't take it couldn't stand another minute couldn't bear another day without you in it all of the joy that I had known for my life was stripped away from me the minute that you died to have you in my life was all i ever wanted but now without you I'm a soul forever haunted can't help but feel that i had taken you for granted no way in hell that i can ever comprehend this i wasn't dreaming when they told me you were gone i was wide awake and feeling that they had to be wrong how could you leave me when you swore that you would stay now i'm trapped inside a nightmare every single fucking day it's like a movie but there's not a happy ending every scene fades black and there's no pretending this little fairy tale doesn't seem to end well theres no knight in shining armor who will wake me from the spell i know you didn't plan this you tried to do what's right but in the middle of this madness i'm the one you left to win this fight red like roses fills my head with dreams and finds me always closer to the emptiness and sadness that has come to take the place of you i know you're broken down by anger and by sadness you feel I left you in a world that's full of madness wish i could talk to you if only for a minute make you understand the reasons why i did it i wanna tell you that you're all that ever mattered want you to know that for eternity i'm shattered i tried so hard just to protect you but i failed to and in a prison of abandonment i've jailed you i never planned that i would leave you there alone i was sure that i would see you when i made it back home and all the times I swore that it would be okay now i'm nothing but a liar and you're thrown into the fray this bedtime story ends with misery ever after the pages are torn and there's no final chapter i didn't have a choice I did what I had to do i made a sacrifice but forced a bigger sacrifice on you i know you've lived a nightmare i caused you so much pain but baby please don't do what i did i don't want you to waste your life in vain red like roses fills my head with dreams and finds me always closer to the emptiness and sadness that has come to take the place of you you're not the only one who needed me i thought you understood you were the one i needed and you left me as I always feared you would would I change it if i could? it doesn't matter how the petals scatter now every nightmare just discloses it's your blood that's red like roses and no matter what I do nothing ever takes the place of you red like roses fills my head with dreams and finds me always closer to the emptiness and sadness that has come to take the place of you";
  var words = {};
  var words_attr = [];
  string_handle(lyric);

  var canvas = document.getElementById('c');
  console.log("canvas!", canvas)
  if (canvas && canvas.getContext) {
      canvas.width = window.innerWidth;
  canvas.height = window.outerHeight;
  
    var c = canvas.getContext('2d'),
      w = canvas.width,
      h = canvas.height;

    c.strokeStyle = 'red';
    c.fillStyle = '#e1e1e1';
    c.lineWidth = 5;

    // constructor
    Word = function(key) {
      this.text = key;
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      this.font = words[key] * 3 + 'px "Special Elite"'
      this.speed = (words[key]);
    }
    for (key in words) {
      words_attr.push(new Word(key));
    }


    function animation() {

      for (var i = 0; i < words_attr.length; i++) {
        c.font = words_attr[i].font;
        c.fillText(words_attr[i].text, words_attr[i].x, words_attr[i].y);
        words_attr[i].width = c.measureText(words_attr[i].text).width;
        c.stroke();
      }
      move();
    }

    function move() {
      for (var i = 0; i < words_attr.length; i++) {
        if (words_attr[i].x > w) {
          words_attr[i].x = -words_attr[i].width;
          words_attr[i].y = Math.random()*h;
        }else{

          words_attr[i].x += words_attr[i].speed >= 2 ? 2 : words_attr[i].speed ;
        }
      }
    }

    setInterval(function() {
      c.clearRect(0,0,w,h);
      animation();
    },24);

  }

  function string_handle(str) {
    var split_str = str.split(" ");
    var word_array = [];
    var word_count = [];
    for (var i = 0; i < split_str.length; i++) {
      check = true;
      for (var j = 0; j <= word_array.length; j++) {
        if (split_str[i] == word_array[j]) {
          word_count[j]++;
          check = false;
          break;
        }
      }
      if (check) {
        word_array.push(split_str[i]);
        word_count.push(1);
      }
    }
    for (var i = 0; i < word_array.length; i++) {
      words[word_array[i]] = word_count[i];
    }
    return words;
  }

}