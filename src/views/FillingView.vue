<template>
    <div class="about">
      <a href="/"><p class="backbtn">Tilbage til forsiden</p></a>
      <h1>Flex-fyld</h1>
      <div class="assignments">
        <div class="assignment-row">
          <div class="assignment1"></div>
          <div class="assignment2"></div>
          <div class="assignment3"></div>
        </div>
        <div class="assignment-row">
          <div class="assignment4"></div>
        </div>
      </div>
    </div>
  </template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';

export default class MeatView extends Vue {}
</script>

<style>
.backbtn {
  margin-top: 80px;
}

.backbtn {
  height: 100px;
  width: 300px;
  font-size: 30px;
  background-color: #204B82;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 150px;
  border-radius: 30px;
  transition: 0.5s;

}

.backbtn:hover {
  transform: scale(1.1);
  transition: 0.3s;
}

a {
  color: white;
  text-decoration: none;

}

</style>

