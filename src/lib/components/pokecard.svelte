<script>
	import { fade, fly } from 'svelte/transition';

	export let p;
	export let deleteFunc;
	export let editFunc;
</script>

<div class="card m-1" style="width: 18rem;" in:fly={{ x: 200, y: 200, duration: 1000 }} out:fade>
	<img
		class="card-img-top"
		src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{p.id}.png"
		alt="Pokemon profile"
	/>
	<div class="card-body">
		<h5 class="card-title">{p.name}</h5>
		<div class="card-text">
			<div>Height: {p.height}</div>
			<div>Hp: {p.hp}</div>
		</div>

		<button
			class="btn btn-primary"
			data-bs-toggle="modal"
			data-bs-target="#pokeModal"
			on:click={editFunc(p)}
			>Edit
		</button>

		<button class="btn btn-danger" on:click={deleteFunc(p)}>Delete</button>
	</div>
</div>
