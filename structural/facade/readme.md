### Move all the business logic behind a clean facade

#### Unlike Factory, does not create but redirect

```ts
class User {}
class Product {
	constructor(public price: number) {}
}

class PaymentProcessor {
	charge(user: User, fullPrice: number) {
		return true;
	}
}
class InventorySystem {
	checkStock(product: Product) {
		return true;
	}

	reserve(product: Product) {
		return;
	}
}
class ShippingCalculator {
	compute(address: string) {
		return 54;
	}
}
class FraudChecker {
	verify(user: User) {
		return true;
	}
}
```

```ts
// Without facade
const paymentProcessor = new PaymentProcessor();
const inventorySystem = new InventorySystem();
const shippingCalculator = new ShippingCalculator();
const fraudChecker = new FraudChecker();

const user = new User();
const product = new Product(45);

if (fraudChecker.verify(user)) {
	if (inventorySystem.checkStock(product)) {
		const shipping = shippingCalculator.compute('address');
		if (paymentProcessor.charge(user, product.price + shipping)) {
			inventorySystem.reserve(product);
			// ... bless your heart if you gotta maintain this
		}
	}
}
```

```ts
// with facade
class OrderFacade {
	#paymentProcessor: PaymentProcessor;
	#inventorySystem: InventorySystem;
	#shippingCalculator: ShippingCalculator;
	#fraudChecker: FraudChecker;

	constructor() {
		this.#paymentProcessor = new PaymentProcessor();
		this.#inventorySystem = new InventorySystem();
		this.#shippingCalculator = new ShippingCalculator();
		this.#fraudChecker = new FraudChecker();
	}

	placeOrder(user: User, product: Product, address: string) {
		return;
	}
}

const orderSystem = new OrderFacade();
orderSystem.placeOrder(user, product, 'address'); // handle the login inside itself
```
