<script lang="ts">
    const imgServer: string =
        "https://website.xdcdn.net/game-files/etg-xd/Enter_the_Gungeon/images";
    export let cn: string, en: string;
</script>

<div class="header">
    <img src="{imgServer}/list-header.png" alt="list header" />
    <h3>{cn}<span class="eng">{en}</span></h3>
</div>

<style lang="scss" type="text/scss">
    @import "./header";
</style>
