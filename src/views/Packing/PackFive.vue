
<template>
    <div class="packfive">
        <h1>Påsætning af kantlister</h1>
        <div class="player-container">
            <video width="1080" height="720" controls>
                <source src="../../assets/packaging/kantlister.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video> 
        </div>
</div>


</template>


<script lang="ts">

import { Vue } from 'vue-property-decorator';


export default class PackFive extends Vue {}
</script>

<style>
.packfive {
    height: 100vh;
    width: 100vw;

}

.player-container {
    height: auto;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: end;
}

