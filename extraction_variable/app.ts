// ❌
if (
	(deleteElement !== undefined && isLoading) ||
	(user.isConnected && user.element == null)
) {
	// ...
}

// ✅
const isNotLoading = true;
const isUserConnected = false;
const isCardEmpty = true;
const isUserCanBy = isUserConnected && isCardEmpty && isNotLoading;
if (isUserCanBy) {
	// ...
}
