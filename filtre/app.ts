// ❌
userList.forEach((user) => {
	if (user.isConnected) {
		redirectToDashboard();
	}
});

// ✅
userList
	.filter((user) => user.isConnected)
	.forEach((user) => {
		redirectToDashboard();
	});
