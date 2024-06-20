<script lang="ts">
    import { page } from "$app/stores";
    import { fileData } from "$lib/datafiles";
    import pinyin from "tiny-pinyin";

    const pagename: string = $page.params.filename;
    const imgServer: string = "https://7bye.com/hoah/i/etg/";

    let keyNames: string[] = [];
    let searchText: string = "";
    let isFilterCollpsed: boolean = true;

    let filterNames: Record<string, string[]> = {
        quality: [],
        color: [],
        type: []
    };

    let pagenameDesc: string = (() => {
        switch (pagename) {
            case "gungeoneer":
                return "角色";
            case "gun":
                return "枪";
            case "item":
                return "道具";
            case "enemy":
                return "敌人";
            case "boss":
                return "BOSS";
            case "shrine":
                return "雕像";
            case "npc":
                return "NPC";
            default:
                return "";
        }
    })();

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
        let filterKeys: Record<string, string[]> = {
            quality: [],
            color: [],
            type: []
        };

        keyFilter("quality", "quality");
        keyFilter("color", "colors");
        keyFilter("type", "shapes");

        function keyFilter(type: string, fileType: string) {
            filterKeys[type] = keyNames.filter((key) => {
                if (filterNames[type].length == 0) {
                    return key;
                } else if (fileData(pagename)[key][fileType] == undefined) {
                    return "";
                } else if (fileData(pagename)[key][fileType].includes(filterNames[type])) {
                    return key;
                } else {
                    return "";
                }
            });
        }
        keyNames = searchKeys.filter(
            (key) =>
                filterKeys.quality.includes(key) &&
                filterKeys.color.includes(key) &&
                filterKeys.type.includes(key)
        );
    }

    let lastClicked: Record<string, EventTarget | null> = {
        quality: null,
        color: null,
        type: null
    };
</script>

<div class="search-container">
    {#if pagename == "gun" || pagename == "item"}
        <button
            class="filter-collapsible {isFilterCollpsed ? 'collapsed' : ''}"
            on:click={() => (isFilterCollpsed = !isFilterCollpsed)}>条件</button
        >
    {/if}
    <input
        class="search-box"
        placeholder="强大的名字过滤器"
        type="text"
        bind:value={searchText}
        on:input={searchFunc}
    />
    {#if pagename == "gun" || pagename == "item"}
        <div class="filter {isFilterCollpsed ? 'collapsed' : ''}">
            <div class="quality">
                {#each ["S", "A", "B", "C", "D", "N"] as quality}
                    <input
                        type="radio"
                        name={quality}
                        id={quality}
                        value={quality}
                        bind:group={filterNames.quality}
                        on:click={(event) => {
                            if (lastClicked.quality === event.target) {
                                filterNames.quality = [];
                                lastClicked.quality = null;
                                searchFunc();
                            } else {
                                lastClicked.quality = event.target;
                            }
                        }}
                        on:change={searchFunc}
                    /><label for={quality}>
                        <img src="{imgServer}/qualities/{quality}.png" alt={quality} />
                    </label>
                {/each}
            </div>
            <div class="color">
                {#each ["black", "brown", "gray", "white", "red", "green", "blue", "yellow", "purple"] as color}
                    <input
                        type="checkbox"
                        name={color}
                        id={color}
                        value={color}
                        bind:group={filterNames.color}
                        on:change={searchFunc}
                    /><label for={color}>
                        <span class="color-block {color}"></span>
                    </label>
                {/each}
            </div>
            <div class="type">
                {#if pagename == "gun"}
                    {#each ["gun", "bow", "bullet", "fork", "sword", "other"] as type}
                        <input
                            type="radio"
                            name={type}
                            id={type}
                            value={type}
                            bind:group={filterNames.type}
                            on:click={(event) => {
                                if (lastClicked.type === event.target) {
                                    filterNames.type = [];
                                    lastClicked.type = null;
                                    searchFunc();
                                } else {
                                    lastClicked.type = event.target;
                                }
                            }}
                            on:change={searchFunc}
                        /><label for={type}>
                            <img
                                src="{imgServer}/shapes/{type == 'other' ? '' : 'gun-'}{type}.png"
                                alt={type}
                            />
                        </label>
                    {/each}
                {/if}
                {#if pagename == "item"}
                    {#each ["heart", "bullet", "ring", "ammolet", "rect", "bottle", "shoe", "circle", "other"] as type}
                        <input
                            type="radio"
                            name={type}
                            id={type}
                            value={type}
                            bind:group={filterNames.type}
                            on:click={(event) => {
                                if (lastClicked.type === event.target) {
                                    filterNames.type = [];
                                    lastClicked.type = null;
                                    searchFunc();
                                } else {
                                    lastClicked.type = event.target;
                                }
                            }}
                            on:change={searchFunc}
                        /><label for={type}>
                            <img
                                src="{imgServer}/shapes/{type == 'other' ? '' : 'item-'}{type}.png"
                                alt={type}
                            />
                        </label>
                    {/each}
                {/if}
            </div>
        </div>
    {/if}
</div>

<div class="header">
    <img src="{imgServer}/list-header.png" alt="list header" />
    <h3>{pagenameDesc}</h3>
</div>

<div class="item-block-container {pagename}">
    {#each keyNames as key}
        <div
            class="item-block {fileData(pagename)[key].colors == undefined
                ? ''
                : fileData(pagename)[key].colors.split(',')[
                      Math.floor(Math.random() * fileData(pagename)[key].colors.split(',').length)
                  ]}"
        >
            <div class="icon">
                <img
                    src="{imgServer}{fileData(pagename)[key].icon == undefined
                        ? fileData(pagename)[key].local_icon == undefined
                            ? ''
                            : fileData(pagename)
                                  [key].local_icon.replace(/(%[0-9]{2})/g, '-')
                                  .replace(/\.+|(\-\.)/g, '.')
                                  .replace(/(\/)\-/g, '$1')
                        : fileData(pagename)
                              [key].icon.replace(/(%[0-9]{2})/g, '-')
                              .replace(/\.+|(\-\.)/g, '.')
                              .replace(/(\/)\-/g, '$1')}"
                    alt={fileData(pagename)[key].name}
                />
            </div>
            <a
                href="http://etg-xd.wikidot.com/{key
                    .replace(/[.'!&\-\\/\(\)\+ ]+/g, '-')
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
