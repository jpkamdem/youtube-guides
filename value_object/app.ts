// ❌
export interface IProduct {
	productId: string;
	image?: string;
	hasImage: boolean;
}

// ✅
export interface IProduct {
	productId: string;
	image?: string;
	hasImage: boolean;
}
export class Product implements IProduct {
	protected static productsWithoutImage = ['12', '72', '35'];
	protected static defaultImage = 'img/no_image.jpg';
	#image: string;
	#productId: string;
	constructor(productId: string, image?: string) {
		this.#image = image ?? Product.defaultImage;
		this.#productId = productId;
	}
	get image() {
		return this.#image;
	}
	get hasImage() {
		return Product.defaultImage.includes(this.productId);
	}
	get productId() {
		return this.#productId;
	}
}
