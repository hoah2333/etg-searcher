<script lang="ts">
    import { page } from "$app/stores";
    import { fileData } from "$lib/datafiles";
    import pinyin from "tiny-pinyin";

    const pagename: string = $page.params.filename;
    let keyNames: string[] = [];
    let searchText: string = "";

    resetKeys();

    function resetKeys() {
        keyNames = [];
        for (let key in fileData(pagename)) {
            keyNames.push(key);
        }
    }

    function searchFunc() {
        resetKeys();
        let searchTextPinyin: string = pinyin.convertToPinyin(searchText, undefined, true);
        let searchKeys: string[] = keyNames.filter((key) => {
            let localeName: string =
                fileData(pagename)[key].locale.name == undefined
                    ? ""
                    : fileData(pagename)[key].locale.name;
            let pinyinName: string = pinyin.convertToPinyin(localeName, undefined, true);
            if (
                key.toLowerCase().includes(searchTextPinyin.toLowerCase()) ||
                localeName.toLowerCase().includes(searchTextPinyin.toLowerCase()) ||
                pinyinName.toLowerCase().includes(searchTextPinyin.toLowerCase())
            ) {
                return key;
            } else {
                return "";
            }
        });
        keyNames = searchKeys;
    }
</script>

<input
    class="search-box"
    placeholder="强大的名字过滤器"
    type="text"
    bind:value={searchText}
    on:input={searchFunc}
/>

<div class="item-block-container">
    {#each keyNames as key, index}
        <div class="item-block">
            <div class="icon">
                <img
                    src="https://7bye.com/hoah/i/etg/{fileData(pagename)
                        [key].icon.replace(/(%[0-9]{2})/g, '-')
                        .replace(/\.+|(\-\.)/g, '.')
                        .replace(/\/(\-)/g, '$1')}"
                    alt={fileData(pagename)[key].name}
                />
            </div>
            <a
                href="http://etg-xd.wikidot.com/{key
                    .replace(/[.'!&\-\\/\(\) ]+/g, '-')
                    .toLowerCase()}"
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
