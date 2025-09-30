```ts
if (
	(deleteElement !== undefined && isLoading) ||
	(user.isConnected && user.element == null)
) {
	// ...
}
```

❌ illisible, il faut séparer les différentes conditions en variables

```ts
const isNotLoading = true;
const isUserConnected = false;
const isCardEmpty = true;
const isUserCanBy = isUserConnected && isCardEmpty && isNotLoading;
if (isUserCanBy) {
	// ...
}
```
