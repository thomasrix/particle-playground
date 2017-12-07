/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dev";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_vector__ = __webpack_require__(3);



class Particle{
	constructor(x, y, speed, direction, gravity=0){
		this.position = new __WEBPACK_IMPORTED_MODULE_0__utils_vector__["a" /* default */](x, y);
		this.savedPosition = this.position;
		this.velocity = new __WEBPACK_IMPORTED_MODULE_0__utils_vector__["a" /* default */](0, 0);
		this.velocity.setLength(speed);
		this.velocity.setAngle(direction);
		this.gravity = new __WEBPACK_IMPORTED_MODULE_0__utils_vector__["a" /* default */](0, gravity);
	}
	accelerate(accelation){
		this.velocity.addTo(accelation);
	}
	update(){
		this.savedPosition = this.position;
		this.position.addTo(this.velocity);
		this.velocity.addTo(this.gravity);
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Particle;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return select; });
/* unused harmony export selectAll */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return linearInterpolate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return normalize; });
/* unused harmony export clamp */
/* unused harmony export fetchFile */
/* unused harmony export isTouchSupported */
/* unused harmony export prepath */
/* unused harmony export isIE */
/* unused harmony export addThousandsSeperators */
function create (type, parent, classname){
    // Genbruges til at bygge elementer i DOM strukturen
    var el = document.createElement(type);
    if(classname != undefined){
        if(classname.constructor === Array){
            classname.forEach(function(item){
                el.classList.add(item);
            })
        }else if (classname.constructor === String){
            el.classList.add(classname);
        }
    }
    if(parent){
        parent.appendChild(el);
    }
    return el;
}
function select (s, e = document){
    // Shortcut to select dom elements
    return e.querySelector(s);
}
function selectAll (s, e = document){
    // Shortcut to select dom elements
    return e.querySelectorAll(s);
}
function linearInterpolate(norm, min, max){
    return (max - min) * norm + min;
}
function normalize(value, min, max){
    return (value - min) / (max - min);
}
function clamp (value, min, max){
    if(value > max) value = max;
    if(value < min) value = min;
    return value;
}

function fetchFile(path, callback) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                var data = httpRequest.responseText;
                if (callback) callback(data);
            }
        }
    };
    httpRequest.open('GET', path);
    httpRequest.send();
}

function isTouchSupported() {
    let msTouchEnabled = window.navigator.msMaxTouchPoints;
    let generalTouchEnabled = "ontouchstart" in document.createElement("div");
    if (msTouchEnabled || generalTouchEnabled) {
        //console.log('touch supported');
        return true;
    }
    return false;
}
function prepath(){
    return '';
}

function isIE(){
    if (navigator.appName == 'Microsoft Internet Explorer' ||  !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)))
    {
        return true;
    }
    return false;
}

function addThousandsSeperators(x) {
        var parts = x.toString().split(",");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        return parts.join(",");
    }



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__particle_particle__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_vector__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_trix_utils__ = __webpack_require__(1);





class Ball extends __WEBPACK_IMPORTED_MODULE_0__particle_particle__["a" /* default */]{
	constructor(x, y, speed, direction, gravity = 0, radius = 10){
		super(x, y, speed, direction, gravity);
		this.alive = true;
		this.radius = radius;
		this.drag = 1 - (this.radius / 20000);
		this.resistance = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_trix_utils__["c" /* linearInterpolate */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_trix_utils__["d" /* normalize */])(this.radius, 10, 30), .80, .75);
		this.angle = new __WEBPACK_IMPORTED_MODULE_1__utils_vector__["a" /* default */](1, 0);
		this.rotation = 0;
		//console.log('drag:', this.radius, this.resistance);
	}
	setResistance(value){
		this.resistance = value;
	}
	setColor(hue, lightness){
		this.hue = hue;
		this.lightness = lightness;	
	}
	setBoundaries(left = 0, top = 0, right = 100, bottom = 100){
		this.left = left;
		this.top = top;
		this.right = right;
		this.bottom = bottom;
	}
	update(){
		if(this.alive){
			super.update();
			this.angle.setAngle(this.angle.getAngle() + this.rotation);
		 	this.velocity.multiplyBy(this.drag);
			// this.checkPosition();
	 	}	 		
	}
	kick(dx, dy){
		console.log('kick', dx, dy)
		this.velocity.setY(this.velocity.getY()*-1+dy);
		this.velocity.setX(this.velocity.getX()+dx);
		this.rotation = dx / 200;
	}
	setCallback(parent){
		this.parent = parent;
	}
	checkPosition(){
		if(this.position.getY() + this.radius >= this.bottom){
			this.position = this.savedPosition;
			// this.velocity.setY(this.velocity.getY()*-this.resistance);
			this.velocity.setY(this.velocity.getY()*-1);
			this.rotation = this.velocity.getX() / 70;
	 		this.velocity.multiplyBy(this.resistance);
			 //super.update()
			this.parent.looseLife();	
			this.update();
			//this.alive = false;
			// console.log(this.velocity.getLength(), this.alive);
			 
			//if(this.velocity.getLength() < 0.75) this.alive = false;

		}
		if(this.position.getY() - this.radius <= this.top){
			// this.velocity.setY(this.velocity.getY()*-this.resistance);
			this.position = this.savedPosition;
			this.velocity.setY(this.velocity.getY()*-1);
	 		this.velocity.multiplyBy(this.resistance);	
			this.update();
		}
		if(this.position.getX() + this.radius >= this.right){
			// this.velocity.setX(this.velocity.getX()*-this.resistance);
			this.position = this.savedPosition;
			this.velocity.setX(this.velocity.getX()*-1);
			this.rotation = -this.velocity.getY() / 70;
	 		this.velocity.multiplyBy(this.resistance);	
			this.update();
		}
		if(this.position.getX() - this.radius <= this.left){
			// this.velocity.setX(this.velocity.getX()*-this.resistance);
			this.position = this.savedPosition;
			this.velocity.setX(this.velocity.getX()*-1);
			this.rotation = this.velocity.getX() / 70;
	 		this.velocity.multiplyBy(this.resistance);	
			this.update();
		}

	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Ball;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


class Vector{
	constructor(x = 1, y = 0){
        this.setX(x);
        this.setY(y);
	}
	setX(value){
		this._x = value;
	}
	setY(value){
		this._y = value;
	}
    getX(){
        return this._x;
    }
    setY(value){
        this._y = value;
    }
    getY(){
        return this._y;
    }
    setAngle(angle){
        var length = this.getLength();
        this._x = Math.cos(angle) * length;
        this._y = Math.sin(angle) * length;
    }
    getAngle(){
        return Math.atan2(this._y, this._x);
    }
    setLength(length){
        var angle = this.getAngle();
        this._x = Math.cos(angle) * length;
        this._y = Math.sin(angle) * length;
    }
    getLength(){
        return Math.sqrt(this._x * this._x + this._y * this._y);
    }
    add(v2){
        new Vector(this._x + v2.getX(), this._y + v2.getY());
    }
    subtract(v2){
        return new Vector(this._x - v2.getX(), this._y - v2.getY());
    }
    mulitply(val){
        return new Vector(this._x * val, this._y * val);
    }
    divide(val){
        return new Vector(this._x / val, this._y / val);
    }
    addTo(v2){
        this._x += v2.getX();
        this._y += v2.getY();
    }
    subtractFrom(v2){
        this._x -= v2.getX();
        this._y -= v2.getY();
    }
    multiplyBy(val){
        this._x *= val;
        this._y *= val;
    }
    divideBy(val){
        this._x /= val;
        this._y /= val;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Vector;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(8);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(10)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/sass-loader/lib/loader.js?sourceMap!./styles.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/sass-loader/lib/loader.js?sourceMap!./styles.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_trix_utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_ball_ball__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_particle_particle__ = __webpack_require__(0);





// TODO: Make canvas fit window - include resize event to handle context size
// Try shadow effect on the balls

class CanvasBalls{
	constructor(){
		let canvas = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_trix_utils__["a" /* create */])('canvas', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_trix_utils__["b" /* select */])('#canvas-container'));
		console.log(document.body.getBoundingClientRect());
		canvas.width = parent.innerWidth;
		canvas.height = parent.innerHeight-40;

		this.ctx = canvas.getContext('2d');
		this.canvas = canvas;
		this.balls = [];

		this.update();
		this.canvas.addEventListener('click', this.spawn.bind(this));

		this.ballImage = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_trix_utils__["a" /* create */])('img');
		this.ballImage.src = 'images/ball.png';
		this.shadowImage = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_trix_utils__["a" /* create */])('img');
		this.shadowImage.src = 'images/shadow.png';
		// this.spawn();

	}
	spawn(ev){
		let canvasPos = this.canvas.getBoundingClientRect();
		let mousePos = {x:ev.clientX, y:ev.clientY};
		let canvasRatio = canvasPos.width / this.canvas.width;

		console.log('spawn')
		let x = (mousePos.x - canvasPos.left) / canvasRatio,
		y = (mousePos.y - canvasPos.top) / canvasRatio;

		for(let b = 0 ; b < 10 ; b++){
			let speed = Math.random() * 7 + 1,
			direction = Math.random() * Math.PI * 2,
			gravity = 0.2,
			radius = parseInt(Math.random() * 30) + 10;
			let ball = new __WEBPACK_IMPORTED_MODULE_1__components_ball_ball__["a" /* default */](x, y, speed, direction, gravity, radius);
			ball.setColor(parseInt(Math.random() * 240 + 0), parseInt(Math.random()*60 + 40));

			ball.setBoundaries(0, 0, this.canvas.width, this.canvas.height);
			this.balls.push(ball);
		}

	}
	drawImageBall(ball){
		this.ctx.save();
		this.ctx.translate(ball.position.getX(), ball.position.getY());
		this.ctx.rotate(ball.angle.getAngle());
	 	this.ctx.drawImage(this.ballImage, -ball.radius, - ball.radius, ball.radius * 2, ball.radius * 2);
		this.ctx.rotate(-ball.angle.getAngle());
		this.ctx.drawImage(this.shadowImage, -ball.radius, - ball.radius, ball.radius * 2, ball.radius * 2);
		//this.ctx.translate(-ball.position.getX(), -ball.position.getY());
		this.ctx.restore();
	}
	drawColorBall(ball){
		// console.log('draw', this.testball);
		let color = 100,
		lightness = 80;

		this.ctx.fillStyle='hsla('+ball.hue+', 100%, '+ball.lightness+'%, 0.2)';

		this.ctx.beginPath();
		this.ctx.arc(ball.position.getX(), ball.position.getY(), ball.radius, 0, Math.PI *2);
		this.ctx.fill();

	}
	update(){
		// console.log('update');
		this.ctx.fillStyle='rgba(0, 0, 0, 0.6)';
		this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
		for(let i = 0, l = this.balls.length ; i < l ; i++){
			let ball = this.balls[i];
			if(ball.alive){
				ball.update();
				ball.checkPosition();
			 	this.drawImageBall(ball);
			 	this.drawColorBall(ball);
			}
		}
		this.ticker = requestAnimationFrame(this.update.bind(this));	
	}
}
/* unused harmony export default */


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_trix_utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_ball_ball__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_particle_particle__ = __webpack_require__(0);





class KeepyUppy{
	constructor(){
		let canvas = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_trix_utils__["a" /* create */])('canvas', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_trix_utils__["b" /* select */])('#canvas-container'));
		// console.log(document.body.getBoundingClientRect());
		canvas.width = parent.innerWidth;
		canvas.height = parent.innerHeight-40;

		this.ctx = canvas.getContext('2d');
		this.ctx.font = '40px gibsonRegular';
		this.canvas = canvas;
		this.numOfBalls = 1;
		this.balls = [];
		this.playing = false;
		
		this.maxLives = 3;
		
		this.kicks = 0;
		
		this.update();
		this.canvas.addEventListener('click', this.onCanvasClick.bind(this));
		
		this.ballImage = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_trix_utils__["a" /* create */])('img');
		this.ballImage.src = 'assets/images/ball.png';
		this.shadowImage = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_trix_utils__["a" /* create */])('img');
		this.shadowImage.src = 'assets/images/shadow.png';
		this.clickAreas = {
			ballKickBorder: canvas.height * 0.75,
			kickBorder: canvas.height * 0.75,
			kickDivision: canvas.width * 0.5
		}
		this.scoreText = '';
		//this.getReady();
		// this.spawn();
		
	}
	getReady(){
		// console.log('get Ready')
		this.ctx.fillStyle = '#EEEEEE';
		this.ctx.textAlign = 'center';
		this.ctx.fillText('START', this.canvas.width * 0.5, this.canvas.height * 0.2);
		this.ctx.fillText(this.scoreText, this.canvas.width * 0.5, this.canvas.height * 0.5);
		
	}
	onCanvasClick(ev){
		console.log('click');
		let canvasPos = this.canvas.getBoundingClientRect();
		let mousePos = {x:ev.clientX, y:ev.clientY};
		let canvasRatio = canvasPos.width / this.canvas.width;
		
		let x = (mousePos.x - canvasPos.left) / canvasRatio,
		y = (mousePos.y - canvasPos.top) / canvasRatio;
		
		
		if(!this.playing){
			if(y < this.canvas.height * .25){
				this.spawn(x, y);
				this.playing = true;
			}
		}else{
			let hit = this.hitTest(x, y);
		}
	}
	hitTest(x, y){
		let ball = this.balls[0];
		//console.log(ball.position._y, this.canvas.height * 0.5)
		if(ball.position._y > this.clickAreas.ballKickBorder){
			if(y > this.clickAreas.kickBorder){
				if(x < this.clickAreas.kickDivision && ball.position._x < this.clickAreas.kickDivision ){
					ball.kick(2, (y - ball.position._y)* -0.1);
					this.kicks++;
				}else if(x > this.clickAreas.kickDivision && ball.position._x > this.clickAreas.kickDivision){
					ball.kick(-2, (y - ball.position._y)* -0.1);
					this.kicks++;
				}
				
			}
			
		}
	}
	
	oldHitTest(x, y){
		for(let i = 0, l = this.balls.length ; i < l ; i++){
			let ball = this.balls[i];
			let r = ball.radius;
			let pos = ball.position;
			let dx = pos._x - x;
			let dy = pos._y - y;
			//console.log(pos, x, y, dx );
			if(dx * dx + dy * dy <= r * r){
				//console.log('kick');
				ball.kick(dx, dy);
			}
		}
		return true;	
	}
	spawn(x, y){
		
		//console.log('spawn')
		this.lives = 3;
		this.kicks = 0;
		// let x = (mousePos.x - canvasPos.left) / canvasRatio,
		// y = (mousePos.y - canvasPos.top) / canvasRatio;
		this.balls = [];
		for(let b = 0 ; b < this.numOfBalls ; b++){
			// let speed = Math.random() * 7 + 1,
			let speed = 6,
			// direction = Math.random() * Math.PI * 2,
			direction = (Math.random() > 0.5) ? 0.7 * Math.PI * 2 : 0.8 * Math.PI * 2,
			gravity = 0.2,
			radius = 30;
			let ball = new __WEBPACK_IMPORTED_MODULE_1__components_ball_ball__["a" /* default */](x, y, speed, direction, gravity, radius);
			ball.setCallback(this);
			ball.setColor(parseInt(Math.random() * 240 + 0), parseInt(Math.random()*60 + 40));
			
			ball.setBoundaries(0, 0, this.canvas.width, this.canvas.height);
			this.balls.push(ball);
		}
		
	}
	drawImageBall(ball){
		this.ctx.save();
		this.ctx.translate(ball.position.getX(), ball.position.getY());
		this.ctx.rotate(ball.angle.getAngle());
		this.ctx.drawImage(this.ballImage, -ball.radius, - ball.radius, ball.radius * 2, ball.radius * 2);
		this.ctx.rotate(-ball.angle.getAngle());
		this.ctx.drawImage(this.shadowImage, -ball.radius, - ball.radius, ball.radius * 2, ball.radius * 2);
		//this.ctx.translate(-ball.position.getX(), -ball.position.getY());
		this.ctx.restore();
	}
	drawColorBall(ball){
		// console.log('draw', this.testball);
		let color = 100,
		lightness = 80;
		
		this.ctx.fillStyle='hsla('+ball.hue+', 100%, '+ball.lightness+'%, 0.2)';
		
		this.ctx.beginPath();
		this.ctx.arc(ball.position.getX(), ball.position.getY(), ball.radius, 0, Math.PI *2);
		this.ctx.fill();
		
	}
	looseLife(){
		console.log('loose life', this.lives)
		this.lives--;
		if(this.lives === 0){
			this.end();
		}
	}
	end(){
		console.log('the end');
		this.scoreText = 'Du fik: '+this.kicks;
		this.balls[0].alive = false;
		this.playing = false;
	}
	showLives(){
		let spacing = this.canvas.width / (this.maxLives+3);
		for(let i = 0 ; i < this.maxLives ; i++){
			this.ctx.fillStyle = '#EEEEEE';
			this.ctx.strokeStyle = '#EEEEEE';
			this.ctx.beginPath();
			this.ctx.arc((i * spacing)+spacing, 30, 10, 0, Math.PI *2);
			this.ctx.stroke();
			if(i < this.lives){
				this.ctx.fill();
			}
			
		}
		this.ctx.textAlign = 'right';
		this.ctx.fillText(this.kicks, this.canvas.width - 10, 45)
	}
	update(){
		//console.log('update');
		this.ctx.fillStyle='rgba(1, 125, 1, 1)';
		this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
		if(this.playing){
			for(let i = 0, l = this.balls.length ; i < l ; i++){
				let ball = this.balls[i];
				if(ball.alive){
					ball.update();
					ball.checkPosition();
					this.drawImageBall(ball);
					//this.drawColorBall(ball);
				}
			}
			this.showLives();
		}else{
			this.getReady()
		}
		this.ticker = requestAnimationFrame(this.update.bind(this));	
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = KeepyUppy;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_trix_utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_ball_ball__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_spark_spark__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_particle_particle__ = __webpack_require__(0);






// TODO: Make canvas fit window - include resize event to handle context size
// Try shadow effect on the balls

class Sparks{
	constructor(){
		let canvas = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_trix_utils__["a" /* create */])('canvas', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_trix_utils__["b" /* select */])('#canvas-container'));
		console.log(document.body.getBoundingClientRect());
		canvas.width = parent.innerWidth;
		canvas.height = parent.innerHeight-40;

		this.ctx = canvas.getContext('2d');

		this.canvas = canvas;
		this.sparks = [];

		this.update();
		this.canvas.addEventListener('click', this.spawn.bind(this));

		this.ballImage = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_trix_utils__["a" /* create */])('img');
		this.ballImage.src = 'images/ball.png';
		this.shadowImage = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_trix_utils__["a" /* create */])('img');
		this.shadowImage.src = 'images/shadow.png';
		// this.spawn();

	}
	spawn(ev){
		let canvasPos = this.canvas.getBoundingClientRect();
		let mousePos = {x:ev.clientX, y:ev.clientY};
		let canvasRatio = canvasPos.width / this.canvas.width;

		console.log('spawn')
		let x = (mousePos.x - canvasPos.left) / canvasRatio,
		y = (mousePos.y - canvasPos.top) / canvasRatio;

		for(let b = 0 ; b < 100 ; b++){
			let speed = Math.random() * 7 + 1,
			direction = Math.random() * Math.PI * 2,
			gravity = 0.2,
			radius = parseInt(Math.random() * 4) + 1;
			let spark = new __WEBPACK_IMPORTED_MODULE_2__components_spark_spark__["a" /* default */](x, y, speed, direction, gravity, radius);
			spark.setColor(parseInt(Math.random() * 15 + 30), Math.random() * 10 + 80);

			spark.setBoundaries(0, 0, this.canvas.width, this.canvas.height);
			this.sparks.push(spark);
		}

	}
	drawImageBall(ball){
		this.ctx.save();
		this.ctx.translate(ball.position.getX(), ball.position.getY());
		this.ctx.rotate(ball.angle.getAngle());
	 	this.ctx.drawImage(this.ballImage, -ball.radius, - ball.radius, ball.radius * 2, ball.radius * 2);
		this.ctx.rotate(-ball.angle.getAngle());
		this.ctx.drawImage(this.shadowImage, -ball.radius, - ball.radius, ball.radius * 2, ball.radius * 2);
		//this.ctx.translate(-ball.position.getX(), -ball.position.getY());
		this.ctx.restore();
	}
	drawColorBall(ball){
		// console.log('draw', this.testball);
		let color = 100,
		lightness = 80;

		this.ctx.fillStyle='hsla('+ball.hue+', 100%, '+ball.lightness+'%, 0.8)';
		 //this.ctx.shadowBlur = 30;
		 //this.ctx.shadowColor = '#FFFFFF';

		this.ctx.beginPath();
		this.ctx.arc(ball.position.getX(), ball.position.getY(), ball.radius, 0, Math.PI *2);
		this.ctx.fill();
		//this.ctx.shadowBlur = 0;

	}
	update(){
		// console.log('update');
		this.ctx.fillStyle='rgba(0, 0, 0, 0.15)';
		this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
		for(let i = 0, l = this.sparks.length ; i < l ; i++){
			let spark = this.sparks[i];
			if(spark.alive){
				spark.update();
				spark.checkPosition();
			 	//this.drawImageBall(spark);
			 	this.drawColorBall(spark);
			}
		}
		this.ticker = requestAnimationFrame(this.update.bind(this));	
	}
}
/* unused harmony export default */


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "[widget-wrapper] {\n  line-height: normal; }\n  [widget-wrapper] button {\n    height: auto; }\n\n#canvas-container {\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n  width: 100%;\n  height: 100%; }\n  #canvas-container canvas {\n    display: block;\n    width: 100%;\n    height: 100%; }\n", "", {"version":3,"sources":["/Users/trix/Documents/udvikling/Personal/webpack-particle-playground/src/styles/styles.scss","/Users/trix/Documents/udvikling/Personal/webpack-particle-playground/src/styles/styles.scss"],"names":[],"mappings":"AAAA;ECCE,oBAAmB,EAInB;EDHA;ICCC,aAAY,EACZ;;AAEF;EACA,yCAA0C;EAC1C,4BAA2B;EAC3B,YAAU;EACV,aAAW,EAMX;EAVA;IAMC,eAAa;IACb,YAAU;IACV,aAAW,EACX","file":"styles.scss","sourcesContent":["[widget-wrapper] {\n  line-height: normal; }\n  [widget-wrapper] button {\n    height: auto; }\n\n#canvas-container {\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n  width: 100%;\n  height: 100%; }\n  #canvas-container canvas {\n    display: block;\n    width: 100%;\n    height: 100%; }\n","[widget-wrapper] {\n\t\tline-height: normal;\n\t\tbutton {\n\t\t\theight: auto;\n\t\t}\n\t}\n\t#canvas-container{\n\t-webkit-tap-highlight-color: rgba(0,0,0,0);\n\t-webkit-touch-callout: none;\n\twidth:100%;\n\theight:100%;\n\tcanvas{\n\t\tdisplay:block;\n\t\twidth:100%;\n\t\theight:100%;\n\t}\n}"],"sourceRoot":""}]);

// exports


/***/ }),
/* 9 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__particle_particle__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_vector__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_trix_utils__ = __webpack_require__(1);





class Spark extends __WEBPACK_IMPORTED_MODULE_0__particle_particle__["a" /* default */]{
	constructor(x, y, speed, direction, gravity = 0, radius = 10){
		super(x, y, speed, direction, gravity);
		this.alive = true;
		this.darkening = 0.3;
		this.minLightness = 40;
		this.radius = radius;
		this.drag = 1 - (this.radius / 20000);
		this.resistance = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_trix_utils__["c" /* linearInterpolate */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_trix_utils__["d" /* normalize */])(this.radius, 1, 5), .70, .50);
		this.angle = new __WEBPACK_IMPORTED_MODULE_1__utils_vector__["a" /* default */](1, 0);
		this.rotation = 0;
		console.log('drag:', this.radius, this.resistance);
	}
	setResistance(value){
		this.resistance = value;
	}
	setColor(hue, lightness){
		this.hue = hue;
		this.lightness = lightness;	
	}
	setBoundaries(left = 0, top = 0, right = 100, bottom = 100){
		this.left = left;
		this.top = top;
		this.right = right;
		this.bottom = bottom;
	}
	update(){
		if(this.alive){
			super.update();
			this.angle.setAngle(this.angle.getAngle() + this.rotation);
		 	this.velocity.multiplyBy(this.drag);
		 	if(this.lightness > this.minLightness) this.lightness -= this.darkening;
			// this.checkPosition();
	 	}	 		
	}
	checkPosition(){
		if(this.position.getY() + this.radius >= this.bottom){
			this.position = this.savedPosition;
			// this.velocity.setY(this.velocity.getY()*-this.resistance);
			this.velocity.setY(this.velocity.getY()*-1);
			this.rotation = this.velocity.getX() / 70;
	 		this.velocity.multiplyBy(this.resistance);
	 		//super.update()	
			this.update();
			// console.log(this.velocity.getLength(), this.alive);
		 	if(this.velocity.getLength() < 0.75) this.alive = false;

		}
		if(this.position.getY() - this.radius <= this.top){
			// this.velocity.setY(this.velocity.getY()*-this.resistance);
			this.position = this.savedPosition;
			this.velocity.setY(this.velocity.getY()*-1);
	 		this.velocity.multiplyBy(this.resistance);	
			this.update();
		}
		if(this.position.getX() + this.radius >= this.right){
			// this.velocity.setX(this.velocity.getX()*-this.resistance);
			this.position = this.savedPosition;
			this.velocity.setX(this.velocity.getX()*-1);
			this.rotation = -this.velocity.getY() / 70;
	 		this.velocity.multiplyBy(this.resistance);	
			this.update();
		}
		if(this.position.getX() - this.radius <= this.left){
			// this.velocity.setX(this.velocity.getX()*-this.resistance);
			this.position = this.savedPosition;
			this.velocity.setX(this.velocity.getX()*-1);
			this.rotation = this.velocity.getX() / 70;
	 		this.velocity.multiplyBy(this.resistance);	
			this.update();
		}

	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Spark;


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__canvasballs__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__keepy_uppy__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sparks__ = __webpack_require__(7);
__webpack_require__(4);






function init() {

     const ku = new __WEBPACK_IMPORTED_MODULE_1__keepy_uppy__["a" /* default */]();
    //  const cb = new CanvasBalls();
    // const sp = new Sparks();

}
document.addEventListener('DOMContentLoaded', () => {
    init(); // Udkommenteres til launch i webdok, da vi ikke får event dér
});



/***/ })
/******/ ]);
//# sourceMappingURL=drn-main.test.bundle.js.map