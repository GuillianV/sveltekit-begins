<script>
	export let data;

	const {
		experiences,
		minPagination = 1,
		maxPagination = 1,
		actualPagination = 1,
		arrayOfPagination = [1]
	} = data;
</script>

<div class="conteneur">
	<h1>Three Js experiences</h1>
	<div class="grid">
		{#each experiences as experience, index}
			<div class="grid-item">
				<div class="gi-content">
					<iframe
						loading="lazy"
						src={experience.path}
						frameborder="0"
						title={experience.path + '-' + index}
					/>
					<span>{experience.title}</span>
				</div>

				<a target="_blank" href={experience.path}>
					<div class="btn">Watch More !</div>
				</a>
			</div>
		{/each}

		
	

		<!-- Répétez ces éléments pour chaque élément de la grille -->
	</div>

	<!-- Bloc de pagination -->
	<div class="pagination">
		<ul>
			{#each arrayOfPagination as pagination, index}
				<li>
					<a
						class={pagination == actualPagination ? 'active' : ''}
						data-sveltekit-preload-data="hover"
						href="/threejs/{pagination}">{pagination}</a
					>
				</li>
			{/each}
		</ul>
	</div>
</div>

<style lang="scss">
	.conteneur {
		background-color: #f0f0f0;
		display: flex;
		flex-direction: column;
		align-items: center;
		min-height: 100vh;
		margin: 0;
		font-family: $font-family-secondary;
		h1 {
			font-family: $font-family-main;
			margin: 128px;
			font-size: 3.5rem;
		} 
		.grid {
			width: 100%;
			height: 100%;
			justify-content: center;
			align-items: center;
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: 20px;
			padding: 20px;
			box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);

			@media only screen and (max-width: 1200px){
				grid-template-columns: repeat(2, 1fr);
			}

			@media only screen and (max-width: 600px){
				grid-template-columns: repeat(1, 1fr);
			}
		}

		.grid-item {
			@media only screen and (max-width: 1200px){
				height: 45vw;
			}

			@media only screen and (max-width: 600px){
				height: 80vw;
			}
			height: 30vw;
			background-color: #f0f0f0;
			border-radius: 10px;
			padding: 10px;
			text-align: center;
			transition: all 0.3s ease-in-out;

			a {
				height: 20%;
				position: relative;
				display: flex;
				justify-content: center;
				align-items: center;
				text-decoration: none;
			}
			.btn {
				display: inline-block;
				padding: 10px 20px;
				background-color: #757575;
				color: #fff;
				border-radius: 5px;
				text-decoration: none;
				font-weight: bold;
				transition: background-color 0.3s ease-in-out;
				&:hover {
					background-color: #1d1d1d;
				}
			}
			.gi-content {
				overflow: hidden;
				display: block;
				position: relative;
				height: 80%;
				img,
				iframe {
					max-width: 100%;
					height: auto;
					border-radius: 10px;
					box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
					transition: transform 0.3s ease-in-out;
					position: absolute;
					width: 100%;
					height: 100%;
					left: 0;
					top: 0;
				}
				span {
					display: block;
					display: block;
					z-index: 111;
					position: relative;
					pointer-events: none;
					padding: 16px;
				}
			}

			&:hover {
				transform: translateY(-5px);
				box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
			}
		}

		.pagination {
			margin-top: 20px;
			padding: 64px;
			ul {
				list-style: none;
				padding: 0;
				display: flex;
				li {
					margin-right: 10px;
					a {
						text-decoration: none;
						color: #007bff;
						font-weight: bold;
						border: 1px solid #007bff;
						border-radius: 5px;
						padding: 5px 10px;
						transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
						&:hover,
						&.active {
							background-color: #007bff;
							color: #fff;
						}
					}
				}
			}
		}



	}
</style>
