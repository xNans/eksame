
<template>
    <div class="packfour">
        <h1>Justering af afviste bægre (RBJ Schubert)</h1>
        <div class="player-container">
            <video width="1080" height="720" controls>
                <source src="../../assets/packaging/afvist-83.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video> 
        </div>
  </div>
  
  
  </template>
  
  
  <script lang="ts">
  
  import { Vue } from 'vue-property-decorator';
  
  
  export default class PackSix extends Vue {}
  </script>
  
  <style>
  .packsix {
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
  
  