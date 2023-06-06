<template>
    <div class="dry-root">
        {{ msg }}
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class DepartmentPackaging extends Vue {
  @Prop() private msg!: string;
}
</script>

<style scoped>
</style>