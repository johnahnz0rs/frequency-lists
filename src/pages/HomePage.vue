<!-- eslint-disable prettier/prettier -->
<template>
  <div id="homepage">
    <h1>Ktown's Killa VoKab</h1>
    <p>
      a "frequency list" is like a dictionary, but instead of alphabetically,
      the words are ordered by how "frequently" they are used.
    </p>
    <p>
      the top 1,000-5,000 words give you access to 75-90% of the language. pretty darned good.
    </p>
    <p>
      use these flashcards to help you learn you some vocabulary to make your world a better place.<br />pick a language below
    </p>
  </div>
  <div>
    <router-link to="/korean" class="card">Korean</router-link>
    <router-link to="/spanish" class="card">Spanish</router-link>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
#homepage {
  text-align: center;
}
p {
  max-width: 420px;
  margin-left: auto;
  margin-right: auto;
}
.card {
  display: block;
  text-align: center;
  border: 3px dashed darkslategray;
  width: 360px;
  margin: 32px auto;
  padding: 42px 0;
}
</style>
