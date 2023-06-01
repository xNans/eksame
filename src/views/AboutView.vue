<template>
  <div class="about">
    <h1>Tørstof</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DepartmentDry from '@/components/DepartmentDry.vue';

@Component({
  components: {
    DepartmentDry,
  },
})
export default class AboutView extends Vue {}
</script>
