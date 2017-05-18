'use strict'
import Vector from '../../utils/vector';

export default class Particle{
	constructor(x, y, speed, direction, gravity=0){
		this.position = new Vector(x, y);
		this.velocity = new Vector(0, 0);
		this.velocity.setLength(speed);
		this.velocity.setAngle(direction);
		this.gravity = new Vector(0, gravity);
	}
	accelerate(accelation){
		this.velocity.addTo(accelation);
	}
	update(){
		this.velocity.addTo(this.gravity);
		this.position.addTo(this.velocity);

	}
}