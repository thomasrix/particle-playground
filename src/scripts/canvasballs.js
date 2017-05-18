'use strict';
import {create, select} from './utils/trix-utils';
import Ball from './components/ball/ball';
import Particle from './components/particle/particle';

export default class CanvasBalls{
	constructor(){
		let canvas = create('canvas', select('#canvas-container'));
		canvas.width = '1000';
		canvas.height = '800';

		this.ctx = canvas.getContext('2d');
		this.canvas = canvas;
		this.balls = [];
		for(let b = 0 ; b < 30 ; b++){
			let x = 500,
			y = 200,
			speed = Math.random() * 5 + 1,
			direction = Math.random() * Math.PI * 2,
			gravity = 0.03,
			radius = parseInt(Math.random() * 20) + 1;
			let ball = new Ball(x, y, speed, direction, gravity, radius);
			ball.setColor(parseInt(Math.random() * 60 + 180), parseInt(Math.random()*60 + 40));

			ball.setBoundaries(0, 0, 1000, 800);
			this.balls.push(ball);
		}

		this.update();

	}
	drawBall(ball){
		// console.log('draw', this.testball);
		let color = 100,
		lightness = 80;


		this.ctx.fillStyle='hsla('+ball.hue+', 100%, '+ball.lightness+'%, 1)';

		this.ctx.beginPath();
		this.ctx.arc(ball.position.getX(), ball.position.getY(), ball.radius, 0, Math.PI *2);
		this.ctx.fill();


	}
	update(){
		// console.log('update');
		this.ctx.fillStyle='rgba(0, 0, 0, 0.7)';
		this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
		for(let i = 0, l = this.balls.length ; i < l ; i++){
			let ball = this.balls[i];
			ball.update();
			ball.checkPosition();
			this.drawBall(ball);
		}
		this.ticker = requestAnimationFrame(this.update.bind(this));	
	}
}