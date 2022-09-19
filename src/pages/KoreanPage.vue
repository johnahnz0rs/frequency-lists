<template>
  <div id="korean-page">
    <div id="heading">
      <h1>Korean</h1>
    </div>
    <div id="flashcard">
      <div class="card card-front" :id="random_word.frequency">
        <p>{{ random_word.korean }}</p>
        <p>{{ random_word.english }}</p>
      </div>
      <!-- <div class="card" v-for="word in korean_list" :key="word.frequency">
        <p>{{ word }}</p>
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  name: "KoreanPage",
  computed: {
    korean_list() {
      return this.$store.getters["korean_list"];
    },
    random_word() {
      const randomIndex = Math.floor(Math.random() * 2000);
      return this.korean_list[randomIndex];
    },
  },
};
</script>

<style scoped>
#korean-page {
  /* text-align: center; */
}
#heading h1 {
  text-align: center;
}
</style>
