<template>
  <div class="hello">
    <h1 class="frontbanner">{{ msg }}
      <!-- <img class="logo" alt="Vue logo" src="../assets/logo.png"> -->
    </h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.hello {
  height: 700px;
  width: 100vw;
  background-color: beige;
}

.logo {
  width: 100px;
  height: 100px;
}

.frontbanner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
