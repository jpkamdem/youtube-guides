```ts
if (product.id == '1' || product.id == '2' || product.id == '3') {
	product.image = '';
}
```

❌ Le premier exemple est difficile à maintenir et peu claire, on sait pas réellement ce qu'on cherche.

```ts
const productIdsWithoutImage = [1, 2, 3];
if (productIdsWithoutImage.includes(product.id)) {
	product.image = '';
}
```

✅ Le second, via un nommage de variable plus claire, permet d'identifier très rapidement ce que l'on essaye de faire (ici, attribuer une image par défaut à celle n'en ayant pas)
