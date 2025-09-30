```ts
function canRedirectToAdminDashboard() {
	if (wifi) {
		if (login) {
			if (admin) {
				redirectToDashboard();
			} else {
				console.error('Must be connected as administrator');
			}
		} else {
			console.error('Must be login first.');
		}
	} else {
		console.error('Must have access to Internet.');
	}
}
```

❌ alignement à gauche déguaulasse, cas nominal perdu dans du code Hadoken

```ts
function canRedirectToAdminDashboard() {
	if (!wifi) {
		return;
	}

	if (!login) {
		return;
	}

	if (!admin) {
		return;
	}

	redirectToDashboard();
}
```

✅ `return` éjecte d'une fonction & peut retourner une valeur, ici non
