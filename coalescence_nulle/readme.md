```ts
let age: number | string;
if (response.data.age) {
	age = response.data.age;
} else {
	age = 'Age could not be determined';
}
```

❌ certaines valeurs devant être incluses ne le sont pas, notamment 0

```ts
age = response?.data?.age || 'Age could not be determined';
```

✅ `??`, l'opérateur non null, n'acepte que `null` & `undefined` comme `falsy`, sans compter 0
