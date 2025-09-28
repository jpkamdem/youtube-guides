// Abstract logic needed to create an object
// Needed for large and complex objects, for not using new keyword

type UserType = undefined | 'regular' | 'admin' | 'moderator';

class User {
	constructor() {}
}

class Admin {
	constructor() {}
}

class Moderator {
	constructor() {}
}

class Regular {
	constructor() {}
}

class UserFactory {
	static id: number = 0;
	#userId: number = 0;
	#type: UserType = undefined;
	#name: string = '';

	create(type: UserType, name: string) {
		if (type == 'admin') {
			return new Admin();
		}

		if (type == 'moderator') {
			return new Moderator();
		}

		if (type == 'regular') {
			return new Regular();
		}
	}
}

// Messy way
const type = 'admin';
const data = { id: '1', name: 'John' };
let user: User;

if (type == 'admin') {
	user = new Admin();
} else if (type == 'moderator') {
	user = new Moderator();
} else {
	user = new Regular();
}

const admin = new UserFactory().create("admin", "john")