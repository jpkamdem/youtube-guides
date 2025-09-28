// Handy way to handle things when having differents ways of doing the same thing

// Without strategy - if nightmare
class Comuter {
	goToWork(transportType: string) {
		if (transportType == 'car') {
			// Start car
			// Check gas
			// Navigate traffic
			// Park in garage
		}

		if (transportType == 'bus') {
			// Check schedule
			// Wait at stop
			// Pay fare
			// Find seat
		}

		if (transportType == 'bike') {
			// Check tires
			// Put on helmet
			// Lock at bike rack
			// Change clothes
		}
		// This keeps growing with each transport types ...
	}
}

// With strategy - chef's kiss
interface TransportStrategy {
	transport(): void;
}

class CarStrategy implements TransportStrategy {
	transport(): void {
		console.log('Driving to work by car');
		// Car specific logic
	}
}

class BusStrategy implements TransportStrategy {
	transport(): void {
		console.log('Getting to work by bus');
		// Bus specific logic
	}
}

class BikeStrategy implements TransportStrategy {
	transport(): void {
		console.log('Cycling to work');
		// Bike specific logic
	}
}

class WalkStrategy implements TransportStrategy {
	transport(): void {
		console.log('Walking to work');
		// Walk specific logic
	}
}

class BetterCommuter {
	#strategy: TransportStrategy;

	setStrategy(strategy: TransportStrategy) {
		this.#strategy = strategy;
	}

	goToWork() {
		if (!this.#strategy) {
			console.log('Transport strategy not set');
			return;
		}

		this.#strategy.transport();
	}
}

// Usage
const commuter = new BetterCommuter();
commuter.setStrategy(new BikeStrategy());
commuter.goToWork();

// Easy to switch strategies
commuter.setStrategy(new BusStrategy());
commuter.goToWork();

commuter.setStrategy(new CarStrategy());
commuter.goToWork();