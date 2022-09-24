<template>
  <div id="korean-page">
    <div id="heading">
      <h1>Korean</h1>
    </div>
    <div id="flashcard">
      <div v-if="showFront" class="card card-front" :id="randomWord.frequency">
        <p>{{ randomWord.korean }}</p>
        <div class="flip" @click="flipCard">
          flip card<br /><span class="small">show english</span>
        </div>
      </div>
      <div v-else class="card card-back" :id="randomWord.frequency">
        <p>{{ randomWord.english }}</p>
        <div class="flip" @click="flipCard">
          flip card<br /><span class="small">show korean</span>
        </div>
      </div>
    </div>
    <div id="prev-next">
      <p id="previous" @click="seePrevWord">see previous</p>
      <p id="next" @click="getRandomWord">next word</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "KoreanPage",
  data() {
    return {
      randomWord: {},
      showFront: true,
    };
  },
  computed: {
    korean_list() {
      return this.$store.getters["korean_list"];
    },
  },
  methods: {
    getRandomWord() {
      const randomIndex = Math.floor(Math.random() * 2000);
      this.randomWord = this.korean_list[randomIndex];
      this.showFront = true;
      console.log(this.randomWord);
    },
    flipCard() {
      this.showFront = !this.showFront;
    },
    seePrevWord() {
      console.log("see previous word");
    },
  },
  created() {
    this.getRandomWord();
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
.card {
  /* text-align: center; */
  padding: 24px 12px;
  border: 1px solid black;
}
.card p {
  text-align: center;
  font-size: 32px;
}
.flip {
  /* font-size: 12px; */
  text-align: right;
  width: 50%;
  margin-left: auto;
  margin-top: 80px;
  padding-right: 8px;
}
.small {
  font-size: 70%;
}
/* #next { */
#prev-next {
  text-align: center;
}
#prev-next p {
  /* margin-top: 120px; */
  display: inline-block;
  margin: 120px 32px 0 32px;
  padding: 8px 0;
  border: 1px solid black;
  text-align: center;
  width: 30%;
}
</style>
