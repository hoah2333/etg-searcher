<script lang="ts">
    import { allData } from "$lib/datafiles";
    import type { DataType } from "$lib/datafiles";
    import pinyin from "tiny-pinyin";

    let keyDatas: DataType[] = [];
    let searchText: string = "";

    function searchFunc(): void {
        resetKeys();
        let searchTextPinyin: string = pinyin.convertToPinyin(searchText, undefined, true);
        keyDatas = keyDatas.filter((key: DataType): DataType | boolean => {
            let localeName: string = key.locale.name || "";
            let pinyinName: string = pinyin.convertToPinyin(localeName, undefined, true);
            if (
                key.name.toLowerCase().includes(searchTextPinyin.toLowerCase()) ||
                localeName.toLowerCase().includes(searchTextPinyin.toLowerCase()) ||
                pinyinName.toLowerCase().includes(searchTextPinyin.toLowerCase())
            ) {
                return key;
            } else {
                return false;
            }
        });

        if (searchText === "") {
            keyDatas = [];
        }

        function resetKeys(): void {
            keyDatas = [];
            for (let keys in allData()) {
                let dataNameDesc: string = ((): string => {
                    switch (keys) {
                        case "boss":
                            return "BOSS";
                        case "chamber":
                            return "膛室";
                        case "chest":
                            return "宝箱";
                        case "enemy":
                            return "敌人";
                        case "game-mode":
                            return "游戏模式";
                        case "gun":
                            return "枪";
                        case "gungeoneer":
                            return "角色";
                        case "item":
                            return "道具";
                        case "npc":
                            return "NPC";
                        case "page":
                            return "杂项";
                        case "pickup":
                            return "掉落物";
                        case "room":
                            return "房间";
                        case "shrine":
                            return "雕像";
                        case "system":
                            return "系统";
                        default:
                            return "";
                    }
                })();
                for (let key in allData()[keys]) {
                    let tempKey: DataType;
                    tempKey = Object.assign(
                        { dataType: dataNameDesc },
                        allData()[keys][key]
                    );
                    keyDatas.push(tempKey);
                }
            }
        }
    }
</script>

<div class="search-container">
    <input
        class="search-box"
        placeholder="强大的名字过滤器（搜索）"
        type="text"
        bind:value={searchText}
        on:input={searchFunc}
    />
    <div class="item-block-container">
        {#each keyDatas as keyData}
            <div class="search-item">
                <a
                    href="https://etg-xd.wikidot.com/{keyData.name
                        .replace(/[.'!&\-\\/\(\)\+ ]+/g, '-')
                        .toLowerCase()}"
                    target="_blank"
                    rel="noopener noreferrer"
                    ><span class="name">{keyData.locale.name || keyData.name}</span><span class="type">类型：{keyData.dataType}</span></a
                >
            </div>
        {/each}
    </div>
</div>

<style lang="scss" type="text/scss">
    @import "./page";
</style>
