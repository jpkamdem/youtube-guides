// ❌
let age: number | string;
if (response.data.age) {
	age = response.data.age;
} else {
	age = 'Age could not be determined';
}

// ✅
age = response?.data?.age || 'Age could not be determined';
