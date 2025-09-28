// ❌
if (user && user.data && user.data.age) {
	// ...
}

// ✅
if (user?.data?.age) {
	// renvoie undefined si les propriétés n’existent pas
}
