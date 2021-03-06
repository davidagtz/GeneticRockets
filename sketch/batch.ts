class Batch {
	rockets: Rocket[];
	constructor(size: number, x: number = 0, y: number = 0) {
		this.rockets = [];

		for (let _ = 0; _ < size; _++) {
			this.rockets.push(new Rocket(x, y));
		}
	}

	draw() {
		for (const rocket of this.rockets) {
			rocket.draw();
		}
	}

	update() {
		for (const rocket of this.rockets) {
			rocket.update();
		}
	}
}
