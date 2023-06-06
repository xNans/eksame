<template>
    <div class="about">
      <h1>Indvejning</h1>
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
import { Component, Vue } from 'vue-property-decorator';
import DepartmentWeighing from '@/components/DepartmentWeighing.vue';

@Component({
  components: {
    DepartmentWeighing,
  },
})
export default class WeighingView extends Vue {}
</script>