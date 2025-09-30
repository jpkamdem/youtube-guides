```ts
function fn1() {
	if (user.isLoggedIn) {
		return true;
	}
	return false;
}
```

❌ mauvais refactoring, ? renvoie `true` ou `undefined`, et non true` ou false`

```ts
function fn2() {
	return !!user?.isLoggedIn;
}
```

✅ !! transforme `true` en `true`, `false` & `undefined` en `false`
