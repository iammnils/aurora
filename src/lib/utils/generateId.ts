export function generateId() {
	return String((Date.now() + Math.random()) * 10000);
}
