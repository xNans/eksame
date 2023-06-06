<template>
  <div class="about">
    <a href="/"><p class="backbtn">Tilbage til forsiden</p></a>
    <h1>Tørstof</h1>
    <div class="assignments">
        <div class="assignment-row">
          <a href="nmcdesign.dk/dryone" class="assignment dry1"><p>Modtagelse af tørstoffer</p></a>
          <a href="nmcdesign.dk/drytwo" class="assignment dry2"><p>Håndtering af tørstoffer i tørstoftanke</p></a>
          <a href="nmcdesign.dk/drythree" class="assignment dry2"><p>prøvetagning fra big bag og egenproduktion</p></a>
        </div>
        <div class="assignment-row">
          <a href="nmcdesign.dk/dryfour" class="assignment dry4"><p>Modtagelse af tørstoffer</p></a>
        </div>
    </div>
  </div>


</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';

export default class AboutView extends Vue {}
</script>

<style>

* {
  margin: 0;
  padding: 0;
}

h1 {
  margin-top: 50px;
}

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
</style>

<style scoped>

.dry1 {
  background-image: url("../assets/tørstof/modtagelsecolor.png");
  background-size: cover;
}
.dry1:hover {
  background-image: url("../assets/tørstof/modtagelse.JPG");
  background-size: cover;
}

.dry2 {
  background-image: url("../assets/tørstof/tankeoj.png");
  background-size: cover;
}
.dry2:hover {
  background-image: url("../assets/tørstof/håndtering-af-tørstoffer.JPG");
  background-size: cover;
}

.dry3 {
  background-image: url("../assets/tørstof/prøveoj.png");
  background-size: cover;
}
.dry3:hover {
  background-image: url("../assets/tørstof/eksempel-på-prøve.jpg");
  background-size: cover;
}

.dry4 {
  background-image: url("../assets/tørstof/afvejningoj.png");
  background-size: cover;
}
.dry4:hover {
  background-image: url("../assets/tørstof/afvejning.JPG");
  background-size: cover;
}

</style>