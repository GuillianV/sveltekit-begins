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

		<!-- <div class="grid-item">
			<div class="gi-content">
				<iframe loading="lazy" src="/three/journey/6" frameborder="0" title="three" />
				<span>Journey 6</span>
			</div>

			<a target="_blank" href="/three/journey/6">
				<div class="btn">Watch More !</div>
			</a>
		</div>

        <div class="grid-item">
			<div class="gi-content">
				<iframe loading="lazy" src="/three/journey/7" frameborder="0" title="three" />
				<span>Journey 7</span>
			</div>

			<a target="_blank" href="/three/journey/7">
				<div class="btn">Watch More !</div>
			</a>
		</div>

        <div class="grid-item">
			<div class="gi-content">
				<iframe loading="lazy" src="/three/journey/8" frameborder="0" title="three" />
				<span>Journey 8</span>
			</div>

			<a target="_blank" href="/three/journey/8">
				<div class="btn">Watch More !</div>
			</a>
		</div>

        <div class="grid-item">
			<div class="gi-content">
				<iframe loading="lazy" src="/three/journey/9" frameborder="0" title="three" />
				<span>Journey 9</span>
			</div>

			<a target="_blank" href="/three/journey/9">
				<div class="btn">Watch More !</div>
			</a>
		</div>

        <div class="grid-item">
			<div class="gi-content">
				<iframe loading="lazy" src="/three/journey/10" frameborder="0" title="three" />
				<span>Journey 10</span>
			</div>

			<a target="_blank" href="/three/journey/10">
				<div class="btn">Watch More !</div>
			</a>
		</div>

        <div class="grid-item">
			<div class="gi-content">
				<iframe loading="lazy" src="/three/journey/11" frameborder="0" title="three" />
				<span>Journey 11</span>
			</div>

			<a target="_blank" href="/three/journey/11">
				<div class="btn">Watch More !</div>
			</a>
		</div>

        <div class="grid-item">
			<div class="gi-content">
				<iframe loading="lazy" src="/three/journey/12" frameborder="0" title="three" />
				<span>Journey 12</span>
			</div>

			<a target="_blank" href="/three/journey/12">
				<div class="btn">Watch More !</div>
			</a>
		</div>

        <div class="grid-item">
			<div class="gi-content">
				<iframe loading="lazy" src="/three/journey/13" frameborder="0" title="three" />
				<span>Journey 13</span>
			</div>

			<a target="_blank" href="/three/journey/13">
				<div class="btn">Watch More !</div>
			</a>
		</div>

      

        <div class="grid-item">
			<div class="gi-content">
				<iframe loading="lazy" src="/three/journey/15" frameborder="0" title="three" />
				<span>Journey 15</span>
			</div>

			<a target="_blank" href="/three/journey/15">
				<div class="btn">Watch More !</div>
			</a>
		</div>

        <div class="grid-item">
			<div class="gi-content">
				<iframe loading="lazy" src="/three/journey/16" frameborder="0" title="three" />
				<span>Journey 16</span>
			</div>

			<a target="_blank" href="/three/journey/16">
				<div class="btn">Watch More !</div>
			</a>
		</div>

        <div class="grid-item">
			<div class="gi-content">
				<iframe loading="lazy" src="/three/journey/17" frameborder="0" title="three" />
				<span>Journey 17</span>
			</div>

			<a target="_blank" href="/three/journey/17">
				<div class="btn">Watch More !</div>
			</a>
		</div>

        <div class="grid-item">
			<div class="gi-content">
				<iframe loading="lazy" src="/three/journey/18" frameborder="0" title="three" />
				<span>Journey 18</span>
			</div>

			<a target="_blank" href="/three/journey/18">
				<div class="btn">Watch More !</div>
			</a>
		</div>

        <div class="grid-item">
			<div class="gi-content">
				<iframe loading="lazy" src="/three/journey/19" frameborder="0" title="three" />
				<span>Journey 19</span>
			</div>

			<a target="_blank" href="/three/journey/19">
				<div class="btn">Watch More !</div>
			</a>
		</div>

        <div class="grid-item">
			<div class="gi-content">
				<iframe loading="lazy" src="/three/journey/20" frameborder="0" title="three" />
				<span>Journey 20</span>
			</div>

			<a target="_blank" href="/three/journey/20">
				<div class="btn">Watch More !</div>
			</a>
		</div>


         

        <div class="grid-item">
			<div class="gi-content">
				<iframe loading="lazy" src="/three/journey/21" frameborder="0" title="three" />
				<span>Journey 21</span>
			</div>

			<a target="_blank" href="/three/journey/21">
				<div class="btn">Watch More !</div>
			</a>
		</div>


        <div class="grid-item">
			<div class="gi-content">
				<iframe loading="lazy" src="/three/journey/22" frameborder="0" title="three" />
				<span>Journey 22</span>
			</div>

			<a target="_blank" href="/three/journey/22">
				<div class="btn">Watch More !</div>
			</a>
		</div>

        <div class="grid-item">
			<div class="gi-content">
				<iframe loading="lazy" src="/three/journey/23" frameborder="0" title="three" />
				<span>Journey 23</span>
			</div>

			<a target="_blank" href="/three/journey/23">
				<div class="btn">Watch More !</div>
			</a>
		</div>

        <div class="grid-item">
			<div class="gi-content">
				<iframe loading="lazy" src="/three/journey/24" frameborder="0" title="three" />
				<span>Journey 24</span>
			</div>

			<a target="_blank" href="/three/journey/24">
				<div class="btn">Watch More !</div>
			</a>
		</div>

        <div class="grid-item">
			<div class="gi-content">
				<iframe loading="lazy" src="/three/journey/25" frameborder="0" title="three" />
				<span>Journey 25</span>
			</div>

			<a target="_blank" href="/three/journey/25">
				<div class="btn">Watch More !</div>
			</a>
		</div>


        <div class="grid-item">
			<div class="gi-content">
				<iframe loading="lazy" src="/three/journey/26" frameborder="0" title="three" />
				<span>Journey 26</span>
			</div>

			<a target="_blank" href="/three/journey/26">
				<div class="btn">Watch More !</div>
			</a>
		</div>


        <div class="grid-item">
			<div class="gi-content">
				<iframe loading="lazy" src="/three/journey/28" frameborder="0" title="three" />
				<span>Journey 28</span>
			</div>

			<a target="_blank" href="/three/journey/28">
				<div class="btn">Watch More !</div>
			</a>
		</div>

        <div class="grid-item">
			<div class="gi-content">
				<iframe loading="lazy" src="/three/journey/29" frameborder="0" title="three" />
				<span>Journey 29</span>
			</div>

			<a target="_blank" href="/three/journey/29">
				<div class="btn">Watch More !</div>
			</a>
		</div>

        <div class="grid-item">
			<div class="gi-content">
				<iframe loading="lazy" src="/three/journey/30" frameborder="0" title="three" />
				<span>Journey 30</span>
			</div>

			<a target="_blank" href="/three/journey/30">
				<div class="btn">Watch More !</div>
			</a>
		</div>

        <div class="grid-item">
			<div class="gi-content">
				<iframe loading="lazy" src="/three/journey/31" frameborder="0" title="three" />
				<span>Journey 31</span>
			</div>

			<a target="_blank" href="/three/journey/31">
				<div class="btn">Watch More !</div>
			</a>
		</div>

        <div class="grid-item">
			<div class="gi-content">
				<iframe loading="lazy" src="/three/journey/32" frameborder="0" title="three" />
				<span>Journey 32</span>
			</div>

			<a target="_blank" href="/three/journey/32">
				<div class="btn">Watch More !</div>
			</a>
		</div>

        <div class="grid-item">
			<div class="gi-content">
				<iframe loading="lazy" src="/three/journey/33" frameborder="0" title="three" />
				<span>Journey 33</span>
			</div>

			<a target="_blank" href="/three/journey/33">
				<div class="btn">Watch More !</div>
			</a>
		</div> -->

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
