<template>
  <div class="charlist">
    <img :src="img" alt="" />
    <section>
      <main>
        <h1>{{ name }}</h1>
        <h3>{{ nickname }}</h3>
        <h6>birthday:{{ birthday }}</h6>
      </main>
    </section>
  </div>
</template>
<script>
export default {
  props: ["name", "birthday", "img", "nickname"],
  name: "CharList",
};
</script>
<style lang="scss">
.charlist {
  width: 300px;
  height: 400px;
  box-shadow: 5px 4px 18px rgba(0, 0, 0, 0.323),
    -5px 4px 18px rgba(0, 0, 0, 0.323);
  position: relative;
  float: left;
  margin: 10px;
  overflow: hidden;
  background: #dbdbdb;
  img {
    width: 100%;
  }
  section {
    position: absolute;
    bottom: 10px;
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;

    main {
      background: #000;
      width: 200px;
      height: 120px;
      color: #fff;
      border-radius: 120px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      box-shadow: 5px 4px 18px rgba(0, 0, 0, 0.323),
        -5px 4px 18px rgba(0, 0, 0, 0.323);
      h1 {
        font-size: 25px;
        text-align: center;
      }
      h3 {
        font-size: 20px;
        margin: 0 0 10px 0;
      }
      h6 {
        font-size: 10px;
        text-align: center;
      }
    }
  }
}
</style>
