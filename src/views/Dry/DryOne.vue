
<template>
    <div class="dryone">
        <h1>Modtagelse af tørstoffer</h1>
        <div class="player-container">
            <video width="1080" height="720" controls>
                <source src="../../assets/tørstof4" type="video/mp4">
                Your browser does not support the video tag.
            </video> 
        </div>
  </div>
  
  
  </template>
  
  
  <script lang="ts">
  
  import { Vue } from 'vue-property-decorator';
  
  
  export default class DryOne extends Vue {}
  </script>
  
  <style>
  .dryOne {
    height: 100vh;
    width: 100vw;
    padding-top: 20px;
  
  }
  
  .player-container {
    height: auto;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: end;
  }
  
  