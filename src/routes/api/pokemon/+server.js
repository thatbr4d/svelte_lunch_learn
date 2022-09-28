import { json } from '@sveltejs/kit';

export function GET() {
	let pokemon = [
		{
			id: 1,
			name: 'bulbasaur',
			height: 7,
			hp: 45
		},
		{
			id: 2,
			name: 'ivysaur',
			height: 10,
			hp: 60
		},
		{
			id: 3,
			name: 'venusaur',
			height: 20,
			hp: 80
		},
		{
			id: 4,
			name: 'charmander',
			height: 6,
			hp: 39
		},
		{
			id: 5,
			name: 'charmeleon',
			height: 11,
			hp: 58
		},
		{
			id: 6,
			name: 'charizard',
			height: 17,
			hp: 78
		},
		{
			id: 7,
			name: 'squirtle',
			height: 5,
			hp: 44
		},
		{
			id: 8,
			name: 'wartortle',
			height: 10,
			hp: 59
		},
		{
			id: 9,
			name: 'blastoise',
			height: 16,
			hp: 79
		},
		{
			id: 10,
			name: 'caterpie',
			height: 3,
			hp: 45
		}
	];

	return json(pokemon);
}

export async function POST({ request }) {
	console.log(await request.json());

	return json(true);
}
