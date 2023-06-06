
<template>
    <div class="packfour">
        <h1>Sortering af afviste bægre fra Line 83 RBJ</h1>
        <div class="player-container">
            <video width="1080" height="720" controls>
                <source src="../../assets/packaging/Sortering af afviste bægre.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video> 
        </div>
  </div>
  
  
  </template>
  
  
  <script lang="ts">
  
  import { Vue } from 'vue-property-decorator';
  
  
  export default class PackFour extends Vue {}
  </script>
  
  <style>
  .packfour {
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
  
  