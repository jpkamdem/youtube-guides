// ❌
function getEmoji(name: string) {
	if (name === 'apple') {
		return '🍏';
	} else {
		if ((name = 'banana')) {
			return '🍌';
		} else {
			if (name === 'cherry') {
				return '🍒';
			} else {
				return '❌';
			}
		}
	}
}

// ✅
function getEmoji(name: string) {
	const fruitMapping: { [key: string]: string } = {
		apple: '🍏',
		banana: '🍌',
		cherry: '🍒',
	};
	return fruitMapping[name] || '❌';
}
