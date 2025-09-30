```ts
export interface IProduct {
	productId: string;
	image?: string;
	hasImage: boolean;
}
```

❌ manque de clarté, on sait juste qu'on définit une image à partir d'une réponse

```ts
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
```

✅ POO toujours utile, chaque opération est bien plus claire, respect du principe d'encapsulation
