'use strict';
import {create, select} from './utils/trix-utils';
import Ball from './components/ball/ball';
import Particle from './components/particle/particle';

export default class KeepyUppy{
	constructor(){
		let canvas = create('canvas', select('#canvas-container'));
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
		
		this.ballImage = create('img');
		this.ballImage.src = 'assets/images/ball.png';
		this.shadowImage = create('img');
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
			let ball = new Ball(x, y, speed, direction, gravity, radius);
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