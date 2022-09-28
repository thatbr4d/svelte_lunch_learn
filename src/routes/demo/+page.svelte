<script>
	import Pokecard from '../../lib/components/pokecard.svelte';
	import Pokemon from '$lib/models/pokemon.js';

	export let data;

	let pokemon = data.pokemon;
	let currentPokemon = new Pokemon();
	let isEdit = false;
	let index = pokemon.length;

	function deletePokemon(p) {
		pokemon = pokemon.filter((x) => x.id !== p.id);
	}

	function addPokemonBtn() {
		currentPokemon = new Pokemon();
		isEdit = false;
	}

	function editPokemonBtn(p) {
		currentPokemon = p;
		isEdit = true;
	}

	function saveEdit() {
		pokemon[pokemon.findIndex((x) => x.id === currentPokemon.id)] = currentPokemon;
	}

	function saveAdd() {
		currentPokemon.id = ++index;
		pokemon = [...pokemon, currentPokemon];
	}

	async function saveAll() {
		const response = await fetch('/api/pokemon', {
			method: 'POST',
			body: JSON.stringify(pokemon),
			headers: { 'content-type': 'application/json' }
		});
	}
</script>

<div class="container">
	<h1>Lunch and Learn Demo</h1>

	<div class="row">
		{#each pokemon as p}
			<Pokecard {p} deleteFunc={deletePokemon} editFunc={editPokemonBtn} />
		{/each}
	</div>

	<div class="row">
		<button
			type="button"
			class="btn btn-primary"
			data-bs-toggle="modal"
			data-bs-target="#pokeModal"
			on:click={addPokemonBtn}
		>
			Add Another Pokemon
		</button>

		<button type="button" class="btn btn-primary mt-1" on:click={saveAll}> Save All </button>
	</div>
</div>

<div class="modal" id="pokeModal" tabindex="-1">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title">Add/Edit Pokemon</h5>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
			</div>
			<div class="modal-body">
				<input
					class="form-control form-control-lg mb-3"
					type="text"
					placeholder="Name"
					bind:value={currentPokemon.name}
				/>

				<input
					class="form-control form-control-lg mb-3"
					type="text"
					placeholder="Height"
					bind:value={currentPokemon.height}
				/>
				<input
					class="form-control form-control-lg mb-3"
					type="text"
					placeholder="Hp"
					bind:value={currentPokemon.hp}
				/>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
				<button
					type="button"
					class="btn btn-primary"
					data-bs-dismiss="modal"
					on:click={isEdit ? saveEdit : saveAdd}>Save changes</button
				>
			</div>
		</div>
	</div>
</div>
