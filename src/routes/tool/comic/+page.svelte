<script lang="ts">
    import Header from "../header.svelte";

    const imgServer: string =
        "https://website.xdcdn.net/game-files/etg-xd/Enter_the_Gungeon/images";
    const comicTotal: number = 42;
    let comicId: number = 1;
</script>

<Header cn="漫画" en="Comic" />

<div class="comic-container">
    <img
        src="{imgServer}/comic/{String(comicId).padStart(4, '0')}.jpg"
        alt="Comic {String(comicId).padStart(4, '0')}"
    />
    <div class="switch">
        <button
            class="prev"
            on:click={() => {
                comicId--;
                if (comicId < 1) {
                    comicId = comicTotal;
                }
            }}><img src="{imgServer}/data/cheese.png" alt="Previous" /></button
        >
        <span class="page-number">{comicId}/{comicTotal}</span>
        <button
            class="next"
            on:click={() => {
                comicId++;
                if (comicId > comicTotal) {
                    comicId = 1;
                }
            }}><img src="{imgServer}/data/cheese.png" alt="Next" /></button
        >
    </div>
</div>

<style lang="scss" type="text/scss">
    @import "./page";
</style>
