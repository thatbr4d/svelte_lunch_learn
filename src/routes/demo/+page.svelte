<div class="container">
	<h1>Lunch and Learn Demo</h1>

	<div class="row">
		<div class="card m-1" style="width: 18rem;">
			<img
				class="card-img-top"
				src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png"
				alt="Pokemon profile"
			/>
			<div class="card-body">
				<h5 class="card-title">Title</h5>
				<p class="card-text" />

				<button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#pokeModal"
					>Edit
				</button>

				<button class="btn btn-danger">Delete</button>
			</div>
		</div>
	</div>

	<div class="row">
		<button
			type="button"
			class="btn btn-primary"
			data-bs-toggle="modal"
			data-bs-target="#pokeModal"
		>
			Add Another Pokemon
		</button>
	</div>
</div>

<div class="modal" id="pokeModal" tabindex="-1">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title">Add/Edit Pokemon</h5>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
			</div>
			<div class="modal-body" />
			<div class="modal-footer">
				<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
				<button type="button" class="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
			</div>
		</div>
	</div>
</div>
