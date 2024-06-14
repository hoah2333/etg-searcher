<script lang="ts">
	import { page } from "$app/stores";
	import { fileData } from "$lib/datafiles";

	const pagename: string = $page.params.filename;
	let keyNames: string[] = [];
	let searchText: string = "";

    insertKeys();

	function insertKeys() {
        keyNames = [];
		for (let key in fileData(pagename)) {
			keyNames.push(key);
		}
	}

	function searchFunc() {
		if (keyNames.includes(searchText)) {
			keyNames = [searchText];
		} else {
			insertKeys();
		}
	}
</script>

<input type="text" bind:value={searchText} on:input={searchFunc} />

<p>{searchText}</p>

<div class="item-block-container">
	{#each keyNames as key, index}
		<div class="item-block">
			<div class="icon">
				<img
					src="https://7bye.com/hoah/i/etg/{fileData(pagename)
						[key].icon.replace(/(%[0-9]{2})/g, '-')
						.replace(/\.+|(\-\.)/g, '.')
						.replace(/\/(\-)/g, '$1')}"
					alt=""
				/>
			</div>
			<a
				href="http://etg-xd.wikidot.com/{key.replace(/[.'!&\-\\/\(\) ]+/g, '-').toLowerCase()}"
				target="_blank"
				rel="noopener noreferrer"
				>{fileData(pagename)[key].locale.name == undefined
					? fileData(pagename)[key].name
					: fileData(pagename)[key].locale.name}</a
			>
		</div>
	{/each}
</div>

<style lang="scss" type="text/scss">
	@import "./page";
</style>
