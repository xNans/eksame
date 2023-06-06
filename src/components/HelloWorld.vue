<template>
  <div class="root-element">
    <div class="hello">
      <h1 class="frontbanner">
                <img class="logo" alt="Vue logo" src="../assets/logo.png">
                {{ msg }}

      </h1>
    </div>
      <div class="department-rows">
        <div class="departmens-coloumns">
          <a href="nmcdesign.dk/about" class="departmentbuttons"><p>Tørstof</p></a>
          <a href="nmcdesign.dk/weighing" class="departmentbuttons"><p>Indvejning</p></a>
          <a href="nmcdesign.dk/meat" class="departmentbuttons"><p>Grovkøkken</p></a>
        </div>
        <div class="departmens-coloumns">
          <a href="nmcdesign.dk/kitchen" class="departmentbuttons"><p>Flex-køkken</p></a>
          <a href="nmcdesign.dk/filling" class="departmentbuttons"><p>Flex-fyld</p></a>
          <a href="nmcdesign.dk/packaging" class="departmentbuttons"><p>Pakkeri</p></a>
        </div>

        <div class="departmens-coloumns">
          <a href="nmcdesign.dk/storage" class="departmentbuttons"><p>Lager</p></a>
        </div>
      </div>
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
  background-image: url('../assets/dyr.png');
  color: white;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.logo {
  width: 100px;
  height: 180px;
}

.frontbanner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 700px;
  width: 100vw;
  gap: 10px;
  font-size: 100px;

}

.departments {
  height: 80vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.department-rows {
  height: 80vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #FFDEC7;
}

.departmens-coloumns {
  height: 25%;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 250px;

}

.departmentbuttons {
  font-size: 25px;
  height: 70px;
  width: 200px;
  background-color: #F5A22C;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  color: white;
  text-decoration: none;
  transition: 0.5s;
}

.departmentbuttons:hover {
  transform: scale(1.1);
  transition: 0.3s;
}

</style>
