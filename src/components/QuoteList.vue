<template>
  <div class="quote">
    <header>
      <h1>Author:{{ author }}</h1>
    </header>
    <section>
      <p>
        {{ quote }}
      </p>
    </section>
  </div>
</template>
<script>
export default {
  props: ["author", "quote"],
  name: "QuoteList",
  methods: {},
};
</script>
<style lang="scss">
.quote {
  width: 300px;
  height: 300px;
  border-radius: 20px;
  margin: 10px;
  float: left;
  background: #dbdbdb96;
  box-shadow: 5px 4px 18px rgba(0, 0, 0, 0.323),
    -5px 4px 18px rgba(0, 0, 0, 0.323);

  header {
    box-shadow: 5px 4px 18px rgba(0, 0, 0, 0.623);
    width: 100%;
    height: 20%;
    margin: 0 0 20px 0;
    background: #dbdbdb;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
      font-size: 25px;
      text-align: center;
    }
  }
  section {
    width: 90%;
    height: 60%;
    margin: auto;
    background: #dbdbdb;
    border-radius: 40px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 5px 4px 18px rgba(0, 0, 0, 0.623);
    p {
      font-size: 20px;
    }
  }
}
</style>
