// ❌
function fn1() {
	if (user.isLoggedIn) {
		return true;
	}
	return false;
}

// ✅
function fn2() {
	return !!(user?.isLoggedIn);
}
