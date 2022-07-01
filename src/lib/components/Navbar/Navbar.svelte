<script>
	import BellIcon from '$lib/assets/icons/BellIcon.svelte';
	import SearchIcon from '$lib/assets/icons/SearchIcon.svelte';
	import BurgerMenuIcon from '$lib/assets/icons/BurgerMenuIcon.svelte';
</script>

<nav class="navbar bg-base-100 mb-4 px-0">
	<div class="navbar-start">
		<div class="dropdown">
			<button class="btn btn-ghost">
				<BurgerMenuIcon />
			</button>
			<ul class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
				<li tabindex="0"><a>Homepage</a></li>
				<li tabindex="0"><a>Portfolio</a></li>
				<li tabindex="0"><a>About</a></li>
			</ul>
		</div>
	</div>
	<div class="navbar-left">
		<a href="/" class="btn btn-ghost normal-case text-xl flex gap-2">aurora</a>
	</div>
	<div class="navbar-end">
		<slot />
		<button class="btn btn-ghost">
			<SearchIcon />
		</button>
		<button class="btn btn-ghost">
			<div class="indicator">
				<BellIcon />
				<span class="badge badge-xs badge-primary indicator-item">1</span>
			</div>
		</button>
	</div>
</nav>
