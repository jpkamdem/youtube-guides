// Assure the existence of a single instance of one class

class Logger {
	error(message: string) {
		return message;
	}

	getInstance() {
		return this;
	}
}

// Bad: Multiple loggers creating chaos
const logger1 = new Logger();
const logger2 = new Logger();

// Good: Single logger everyone uses
const logger = new Logger().getInstance();
logger.error('Failed to process payment');