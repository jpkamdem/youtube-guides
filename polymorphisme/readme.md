```ts
function getPrice(book: string) {
	switch (book) {
		case 'PAPERBACK':
			return book.basePrice;
		case 'EBOOK':
			return (book.basePrice - 5.9) * 0.75;
		case 'AUDIO':
			return hasMembership ? 0 : book.basePrice * 0.5;
	}
}
```

❌ `switch` = if/else moins moche, il faut s'en éloigner. Il y a différents types de livres partageant certaines propriétés en commun = POO

```ts
export interface IBook {
	id: number;
	name: string;
	basePrice: number;
	hasMmberShip: boolean;
}

export abstract class Book implements IBook {
	protected static nextId = 0;
	#id: number;
	#name: string;
	#price: number;
	#memberShip: boolean;

	constructor(name: string, price: number, memberShip: boolean) {
		this.#id = ++Book.nextId;
		this.#name = name;
		this.#price = price;
		this.#memberShip = memberShip;
	}

	get id() {
		return this.#id;
	}

	get name() {
		return this.#name;
	}

	get basePrice() {
		return this.#price;
	}

	get hasMmberShip() {
		return this.#memberShip;
	}

	abstract get updatedPrice(): number;
}

export class EBook extends Book {
	constructor(name: string, price: number, memberShip: boolean) {
		super(name, price, memberShip);
	}

	get updatedPrice() {
		return this.basePrice;
	}
}

export class Paperback extends Book {
	constructor(name: string, price: number, memberShip: boolean) {
		super(name, price, memberShip);
	}
	get updatedPrice() {
		return (this.basePrice - 5.9) * 0.75;
	}
}

export class AudioBook extends Book {
	constructor(name: string, price: number, memberShip: boolean) {
		super(name, price, memberShip);
	}

	get updatedPrice() {
		return this.hasMmberShip ? this.basePrice * 0.5 : this.basePrice;
	}
}
```
