<template>
  <div class="about">
    <ul>
      <li>
        <a
          href="https://www.youtube.com/channel/UCC_Adr2qlJWSiS-Ef3XOwbA"
          target="blank"
          >YouTube</a
        >
      </li>
      <li>
        <a href="https://www.facebook.com/abbasalkaabi2003" target="blank"
          >Facebook</a
        >
      </li>
      <li>
        <a href="https://github.com/abbasalkabbi" target="blank">GitHub</a>
      </li>
      <li>
        <a href="https://breakingbadapi.com/api/" target="blank">Link API</a>
      </li>
    </ul>
  </div>
</template>
<style lang="scss">
.about {
  width: 100vw;
  height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right bottom, #cb5eee, #4be1ec);
  ul {
    list-style: none;
    li {
      width: 200px;
      height: 40px;
      margin: 0 0 10px 0;

      display: flex;
      align-items: center;
      justify-content: center;
      a {
        text-decoration: none;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
      }
    }
    li:nth-child(1) {
      a {
        background: red;
      }
    }
    li:nth-child(2) {
      a {
        background: #3b5999;
      }
    }
    li:nth-child(3) {
      a {
        background: #000;
      }
    }
    li:nth-child(4) {
      a {
        background: rgba(0, 0, 0, 0.774);
      }
    }
  }
  li:hover {
    box-shadow: 5px 4px 18px rgba(0, 0, 0, 0.323),
      -5px 4px 18px rgba(0, 0, 0, 0.323);
  }
}
</style>
