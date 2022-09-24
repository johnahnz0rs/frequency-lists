<template>
  <div id="spanish-page">
    <div id="heading">
      <h1>Spanish</h1>
    </div>
    <div id="flashcard">
      <div v-if="showFront" class="card card-front" :id="wordToShow.frequency">
        <p>{{ wordToShow.spanish }}</p>
        <div class="flip" @click="flipCard">
          flip card<br /><span class="small">show english</span>
        </div>
      </div>
      <div v-else class="card card-back" :id="wordToShow.frequency">
        <p>{{ wordToShow.english }}</p>
        <div class="flip" @click="flipCard">
          flip card<br /><span class="small">show spanish</span>
        </div>
      </div>
    </div>
    <div id="prev-next">
      <p id="previous" @click="seePrevWord">see previous</p>
      <p id="next" @click="getRandomWord">next word</p>
    </div>
    <!-- <div>
      <p class="test" @click="printWordHistory">print wordHistory</p>
      <p class="test" @click="printHistoryIndex">print historyIndex</p>
    </div> -->
  </div>
</template>
<script>
export default {
  name: "SpanishPage",
  data() {
    return {
      wordHistory: [],
      historyIndex: 0,
      showFront: true,
    };
  },
  computed: {
    spanish_list() {
      return this.$store.getters["spanish_list"];
    },
    wordToShow() {
      return this.wordHistory[this.historyIndex];
    },
  },
  methods: {
    getRandomWord() {
      // pick a new word
      const randomIndex = Math.floor(Math.random() * 2000);
      const randomWord = this.spanish_list[randomIndex];
      console.log(randomWord);
      // update wordHistory & historyIndex
      this.wordHistory.push(randomWord);
      this.historyIndex = this.wordHistory.length - 1;
      // flip card to front
      this.showFront = true;
    },
    flipCard() {
      this.showFront = !this.showFront;
    },
    seePrevWord() {
      console.log("see previous word");
      this.showFront = true;
      if (this.historyIndex > 0) {
        this.historyIndex -= 1;
      }
    },
    // printWordHistory() {
    //   console.log(this.wordHistory);
    // },
    // printHistoryIndex() {
    //   console.log(this.historyIndex);
    // },
  },
  created() {
    this.getRandomWord();
  },
};
</script>

<style scoped>
#spanish-page {
  margin: 0 8px;
}
.test {
  border: 1px solid black;
  padding: 8px;
  margin: 8px;
}
#heading h1 {
  text-align: center;
}
.card {
  padding: 24px 12px;
  border: 1px solid black;
}
.card p {
  text-align: center;
  font-size: 32px;
}
.flip {
  text-align: right;
  width: 50%;
  margin-left: auto;
  margin-top: 80px;
  padding-right: 8px;
}
.small {
  font-size: 70%;
}
#prev-next {
  text-align: center;
}
#prev-next p {
  display: inline-block;
  margin: 120px 32px 0 32px;
  padding: 8px 0;
  border: 1px solid black;
  text-align: center;
  width: 30%;
}
</style>
