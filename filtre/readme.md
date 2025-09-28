```ts
userList.forEach((user) => {
	if (user.isConnected) {
		redirectToDashboard();
	}
});
```

❌ condition direct : on ne cherche pas à agir sur l'ensemble de la liste -> il faut filtrer

```ts
userList
	.filter((user) => user.isConnected)
	.forEach((user) => {
		redirectToDashboard();
	});
```
