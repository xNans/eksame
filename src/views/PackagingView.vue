<template>
    <div class="about">
      <a href="/"><p class="backbtn">Tilbage til forsiden</p></a>
      <h1>Pakkeri</h1>
      <div class="assignments">
          <div class="assignment-row">
            <a href="/#/packone" class="assignment pack1"><p>Hvordan genindføres bægre tilbage på linjen</p></a>
            <a href="/#/packtwo" class="assignment pack2"><p>Justering af etiketmaskinehøjde - Collamat etiketmaskiner</p></a>
            <a href="/#/packthree" class="assignment pack3"><p>Justering af stopfotocelle</p></a>
          </div>
          <div class="assignment-row">
            <a href="/#/packfour" class="assignment pack4"><p>Sortering af afviste bægre fra Line 83 RBJ</p></a>
            <a href="/#/packfive" class="assignment pack5"><p>Påsætning af kantlister</p></a>
            <a href="/#/packsix" class="assignment pack6"><p>Sortering af afviste bægre (RBJ Schubert)</p></a>
          </div>
      </div>
      
    </div>
  </template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DepartmentPackaging from '@/components/DepartmentPackaging.vue';

@Component({
  components: {
    DepartmentPackaging,
  },
})
export default class PackagingView extends Vue {}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

h1 {
  margin-top: 50px;
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
  margin-top: 80px;
}

.backbtn:hover {
  transform: scale(1.1);
  transition: 0.3s;
}

a {
  color: white;
  text-decoration: none;

}

.assignments {
  height: auto;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  gap: 100px;
  margin-top: 50px;
  margin-bottom: 80px;
}

.assignment-row {
  height: 50%;
  width: auto;
  gap: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

.assignment {
  height: 250px;
  width: 400px;
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}


.pack1 {
  background-image: url("../assets/packaging/genindføroj.png");
  background-size: cover;
  background-position: center;
}
.pack1:hover {
  background-image: url("../assets/packaging/genindfør-bægre-linje.JPG");
  background-size: cover;
  background-position: center;
}

.pack2 {
  background-image: url("../assets/packaging/justeringetiketoj.png");
  background-size: cover;
  background-position: center;
}
.pack2:hover {
  background-image: url("../assets/packaging/justeringetiket.png");
  background-size: cover;
  background-position: center;
}

.pack3 {
  background-image: url("../assets/packaging/stopfotooj.png");
  background-size: cover;
  background-position: center;
}
.pack3:hover {
  background-image: url("../assets/packaging/stopfoto.JPG");
  background-size: cover;
  background-position: center;
}

.pack4 {
  background-image: url("../assets/packaging/afvistbægreoj.png");
  background-size: cover;
  background-position: center;
}
.pack4:hover {
  background-image: url("../assets/packaging/afviste-bægre.JPG");
  background-size: cover;
  background-position: center;
}

.pack5 {
  background-image: url("../assets/packaging/kantlisteoj.png");
  background-size: cover;
  background-position: center;
}
.pack5:hover {
  background-image: url("../assets/packaging/kantlister.JPG");
  background-size: cover;
  background-position: center;
}

.pack6 {
  background-image: url("../assets/packaging/afvist83oj.png");
  background-size: cover;
  background-position: center;
}
.pack6:hover {
  background-image: url("../assets/packaging/afvist83.JPG");
  background-size: cover;
  background-position: center;
}


</style>