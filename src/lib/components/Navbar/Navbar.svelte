<script>
	import BellIcon from '$lib/assets/icons/BellIcon.svelte';
	import SearchIcon from '$lib/assets/icons/SearchIcon.svelte';
	import DeckIcon from '$lib/assets/icons/DeckIcon.svelte';
</script>

<nav class="navbar bg-base-100 mb-20 px-0">
	<div class="navbar-start">
		<div class="dropdown">
			<a href="/" class="btn btn-ghost">
				<DeckIcon />
			</a>
			<slot name="slot-2-left" />
		</div>
	</div>
	<div class="navbar-left">
		<a href="/" class="btn btn-ghost normal-case text-xl flex gap-2">aurora</a>
	</div>
	<div class="navbar-end">
		<slot name="slot-1-right" />
		<button class="btn btn-ghost">
			<SearchIcon />
		</button>
		<button class="btn btn-ghost">
			<div class="indicator">
				<BellIcon />
				<span class="badge badge-xs badge-accent indicator-item">1</span>
			</div>
		</button>
	</div>
</nav>
