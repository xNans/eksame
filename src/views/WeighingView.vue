<template>
    <div class="about">
      <h1>Indvejning</h1>
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