'use strict';
import {create, select} from './utils/trix-utils';
import Ball from './components/ball/ball';
import Particle from './components/particle/particle';

// TODO: Make canvas fit window - include resize event to handle context size
// Try shadow effect on the balls

export default class CanvasBalls{
	constructor(){
		let canvas = create('canvas', select('#canvas-container'));
		console.log(document.body.getBoundingClientRect());
		canvas.width = parent.innerWidth;
		canvas.height = parent.innerHeight-40;

		this.ctx = canvas.getContext('2d');
		this.canvas = canvas;
		this.balls = [];

		this.update();
		this.canvas.addEventListener('click', this.spawn.bind(this));

		this.ballImage = create('img');
		this.ballImage.src = 'images/ball.png';
		this.shadowImage = create('img');
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
			let ball = new Ball(x, y, speed, direction, gravity, radius);
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