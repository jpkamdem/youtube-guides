// ❌
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

// ✅
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
