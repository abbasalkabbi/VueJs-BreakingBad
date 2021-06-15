<template>
  <div class="home">
    <header>
      <h1>The Breaking Bad..</h1>
    </header>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200&display=swap");
$color: rgba(0, 0, 0, 0.87);
.home {
  width: 100%;
  height: calc(100vh - 60px);
  background: $color;
  display: flex;
  align-items: center;
  justify-content: center;

  header {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    h1 {
      width: fit-content;
      position: relative;
      background: $color;

      color: #fff;
      font-family: "Source Code Pro", monospace;
    }
    h1::before,
    h1::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      top: 0;
      right: 0;
    }
    h1::before {
      background: $color;
      animation: textwriter 6s steps(18) infinite forwards;
    }

    @keyframes textwriter {
      to {
        left: 100%;
      }
    }
    h1::after {
      animation: textwriter 6s steps(18) infinite forwards, writer 1s infinite;
      width: 0.73px;
      background: #fff;
    }
    @keyframes writer {
      to {
        background: transparent;
      }
    }
  }
}
</style>
