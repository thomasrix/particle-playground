'use strict'
import Particle from '../particle/particle';
import Vector from '../../utils/vector';
import {normalize, linearInterpolate} from '../../utils/trix-utils'

export default class Ball extends Particle{
	constructor(x, y, speed, direction, gravity = 0, radius = 10){
		super(x, y, speed, direction, gravity);
		this.radius = radius;
		this.drag = 1 - (this.radius / 10000);
		this.resistance = linearInterpolate(normalize(this.radius, 1, 20), .80, .99);
		this.angle = new Vector(1, 0);
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
		super.update();
		this.angle.setAngle(this.angle.getAngle() + this.rotation);
	 	this.velocity.multiplyBy(this.drag);
		// this.checkPosition()
	}
	checkPosition(){
		if(this.position.getY() + this.radius >= this.bottom){
			this.velocity.setY(this.velocity.getY()*-this.resistance);
			this.rotation = this.velocity.getX() / 70;
			// this.velocity.setY(this.velocity.getY()*-1);
	 		//this.velocity.multiplyBy(this.resistance);	
			this.update();
		}
		if(this.position.getY() - this.radius <= this.top){
			this.velocity.setY(this.velocity.getY()*-this.resistance);
			// this.velocity.setY(this.velocity.getY()*-1);
	 		// this.velocity.multiplyBy(this.resistance);	
			this.update();
		}
		if(this.position.getX() + this.radius >= this.right){
			this.velocity.setX(this.velocity.getX()*-this.resistance);
			this.rotation = -this.velocity.getY() / 70;
			// this.velocity.setX(this.velocity.getX()*-1);
	 		// this.velocity.multiplyBy(this.resistance);	
			this.update();
		}
		if(this.position.getX() - this.radius <= this.left){
			this.velocity.setX(this.velocity.getX()*-this.resistance);
			this.rotation = this.velocity.getX() / 70;
			// this.velocity.setX(this.velocity.getX()*-1);
	 		// this.velocity.multiplyBy(this.resistance);	
			this.update();
		}

	}
}