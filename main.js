const passwordItems = [
	'!@#$%^&*()~_-+={}[]:;<>,.?/|',
	'1234567890',
	'abcdefghijklmnopqrstuvwxyz',
	'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
];

// Main generate password function
function passwordGenerate() {
	let password = '';
	const length = document.getElementById('length').value;
	const passwordAltercations = [
		document.getElementById('check1'),
		document.getElementById('check2'),
		document.getElementById('check3'),
		document.getElementById('check4'),
	];

	// Adds active checkboxes to a combined total
	for (let i = 0; i < 4; i++)
		if (passwordAltercations[i].checked == true) password += passwordItems[i];

	// Generates password
	password = password
		.repeat(32)
		.split('')
		.sort(function () {
			return 0.5 - Math.random();
		})
		.join('')
		.slice(0, length);

	// Call errors
	if (length < 4) error('Password too short (4 - 32)');
	else if (length > 32) error('Password too long (4 - 32)');
	else {
		document.getElementById('passwordOutput').innerHTML = password;
		error('');
	}
}

// Copy password function
function copyPassword() {
	navigator.clipboard.writeText(
		document.getElementById('passwordOutput').value
	);
}

// Clear password function
function clearPassword() {
	document.getElementById('passwordOutput').innerHTML = '';
}

// Error function
function error(error) {
	document.getElementById('passwordError').innerHTML = error;
}
