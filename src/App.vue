<template>
  <div id="nav">
    <ul>
      <router-link to="/">Home</router-link>
      <router-link to="/characters">characters</router-link>
      <router-link to="/quotes">quotes</router-link>
      <router-link to="/about">About</router-link>
    </ul>
  </div>
  <router-view />
</template>
<script>
export default {
  methods: {
    get() {
      this.$store.dispatch("getchar");
    },
    getquotes() {
      this.$store.dispatch("getquotes");
    },
  },
  mounted() {
    this.get();
    this.getquotes();
  },
};
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  /*overflow-x: hidden;*/
}
#nav {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, #000066, #6699ff);
  ul {
    a {
      color: #000;
      text-decoration: none;
      border: 1px solid #000;
      margin: 0 10px 0 0;
      padding: 10px;
    }
    .router-link-exact-active {
      background: #4be1ec;
      color: #000;
    }
  }
}
</style>
