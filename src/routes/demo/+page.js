export async function load({ fetch }) {
	const response = await fetch('/api/pokemon', {
		method: 'GET',
		Headers: { 'content-type': 'application/json' }
	});

	return {
		pokemon: await response.json()
	};
}
