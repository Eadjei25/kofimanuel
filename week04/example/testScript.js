//Accessing formsconst input = form.elements.searchInput;
const form = document.forms['search'];
const input = form.elements.searchInput;
input.addEventListener('focus', () => alert('focused'), false);

input.addEventListener('blur', () => alert('blurred'), false);