<!-- eslint-disable prettier/prettier -->
<template>
  <div id="homepage">
    <div id="info">
      <h1>Ktown Killa VoKab</h1>
      <p>
        a "frequency list" is like a dictionary, but the words are ordered by how "frequently" they are used in that language.
      </p>
      <p>
        the top 1,000 words give you access to >70% of the language. pretty darned good.
      </p>
      <p>
        use these flashcards to help you learn you some vocabulary and make <em>your</em> world a better place.<br />pick a language below
      </p>
    </div>
    <div id="links">
      <router-link to="/korean" class="card">Korean</router-link>
      <router-link to="/spanish" class="card">Spanish</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
#homepage {
  /* text-align: center; */
}
p {
  max-width: 420px;
  margin-left: auto;
  margin-right: auto;
}
#info {
  padding: 0 12px;
}
#info h1 {
  text-align: center;
}
#info p {
  margin-bottom: 12px;
}
.card {
  display: block;
  text-align: center;
  border: 3px dashed darkslategray;
  width: 360px;
  margin: 32px auto;
  padding: 42px 0;
}
a.card {
  color: green;
}
</style>
