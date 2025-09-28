```ts
if (user && user.data && user.data.age) {
	// ...
}
```

❌ duplication de code (user écrit 3 fois)

```ts
if (user?.data?.age) {
	// renvoie undefined si les propriétés n’existent pas
}
```
