<script lang="ts">
    import Header from "../header.svelte";
    import { onMount } from "svelte";
    import cookie from "js-cookie";
    const imgServer: string = "https://7bye.com/hoah/i/etg";

    let cheese: { index: number; direction: number; checked: boolean }[] = [];
    let isEditing: boolean = false;
    let cheeseSize: number = 0;

    onMount(() => {
        let cheeseCookie: string = cookie.get("cheeseTool") || "{}";
        let sizeCookie = cookie.get("cheeseSize") || "0";

        if (cheeseCookie == "{}") {
            cheese = [
                {
                    index: 0,
                    direction: 0,
                    checked: true
                },
                {
                    index: 1,
                    direction: 0,
                    checked: true
                },
                {
                    index: 2,
                    direction: 0,
                    checked: true
                },
                {
                    index: 3,
                    direction: 0,
                    checked: true
                },
                {
                    index: 4,
                    direction: 0,
                    checked: true
                },
                {
                    index: 5,
                    direction: 0,
                    checked: true
                }
            ];
        } else {
            cheese = JSON.parse(cheeseCookie);
            cheeseSize = parseInt(sizeCookie);
        }
    });

    function setCookie() {
        cookie.set("cheeseTool", JSON.stringify(cheese), { path: "/" });
        cookie.set("cheeseSize", cheeseSize.toString(), { path: "/" });
    }
</script>

<Header cn="奶酪记录器" en="Cheese Tool" />

<div class="cheese-container">
    {#each cheese as cheeses}
        <input
            type="checkbox"
            name="cheese"
            value={cheeses.index}
            class="cheese"
            id="cheese-{cheeses.index}"
            bind:checked={cheeses.checked}
            on:change={setCookie}
        />
        <label class="edit-{isEditing}" for="cheese-{cheeses.index}">
            {#if isEditing}
                <button
                    class="edit"
                    on:click={() => {
                        cheese[cheeses.index].direction += 1;
                        if (cheese[cheeses.index].direction > 3) {
                            cheese[cheeses.index].direction = 0;
                        }
                    }}
                ></button>
            {/if}
            <img
                class="direction-{cheeses.direction} size-{cheeseSize}"
                src="{imgServer}/data/cheese.png"
                alt="Cheese {cheeses.index}, facing {cheeses.direction}"
            />
        </label>
    {/each}
</div>
<br />
<span>↑ 点击 <b>奶酪方块</b> {isEditing ? "修改奶酪方向" : "切换是否走过"}</span>
<span
    >↓ 点击 <b>{isEditing ? "保存设置" : "编辑奶酪"}</b>
    {isEditing ? "保存奶酪方向" : "修改奶酪方向"}</span
>
<br />
<button
    on:click={() => {
        isEditing = !isEditing;
        setCookie();
    }}>{isEditing ? "保存设置" : "编辑奶酪"}</button
>
<br />
<span>奶酪的方向跟随存档，</span>
<span>不同的存档方向不同，</span>
<span>而同个存档则顺序是固定的，</span>
<span>记下后就不用每次都去查了。</span>
<br />
<button
    on:click={() => {
        cheeseSize += 1;
        if (cheeseSize > 2) {
            cheeseSize = 0;
        }
        setCookie();
    }}>缩放：{cheeseSize == 0 ? "小" : cheeseSize == 1 ? "中" : "大"}</button
>

<style lang="scss" type="text/scss">
    @import "./page";
</style>
