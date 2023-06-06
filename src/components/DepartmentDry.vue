<template>
    <div class="dry-root">
        {{ msg }}
        <a href="/"><p class="backbtn">Tilbage til forsiden</p></a>
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
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class DepartmentDry extends Vue {
  @Prop() private msg!: string;
}
</script>

<style scoped>

* {
  margin: 0;
  padding: 0;
}

h1 {
  margin-top: 50px;
}
.assignments {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
}

.assignment-row {
  height: 50%;
  width: 80%;
  gap: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

.assignment1, .assignment2, .assignment3, .assignment4 {
  height: 250px;
  width: 250px;
  background-color: aqua;
}
</style>