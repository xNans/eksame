<template>
  <div id="app">
    <nav>
      <router-link to="nmcdesign.dk/">Forside</router-link> |
      <router-link to="nmcdesign.dk/about">Tørstof</router-link> |
      <router-link to="nmcdesign.dk/weighing">Indvejning</router-link> |
      <router-link to="nmcdesign.dk/meat">Grovkøkken</router-link> |
      <router-link to="nmcdesign.dk/kitchen">Flex-køkken</router-link> |
      <router-link to="nmcdesign.dk/filling">Flex-fyld</router-link> |
      <router-link to="nmcdesign.dk/packaging">Pakkeri</router-link> |
      <router-link to="nmcdesign.dk/storage">Lager</router-link> |
    </nav>
    <router-view/>
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 30px;
}

nav {
  padding: 30px;
  background-color: #204a82;
}

nav a {
  font-weight: bold;
  color: white;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #F5A22C;
}


</style>
