```ts
function productHasImage(product: Product) {
	if (product.id == 1 || product.id == 2 || product.id == 3) {
		return true;
	} else {
		return false;
	}
}
```

❌ if/else retourne un booléen, return `true`/`false` est donc superflu

```ts
// ✅
function productHasImage(product: Product) {
	return product.id == 1 || product.id == 2 || product.id == 3;
}
```

```ts
// ✅✅
function productHasImage(product: Product) {
	return [1, 2, 3].includes(product.id);
}
```
