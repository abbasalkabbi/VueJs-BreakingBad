<template>
  <div class="characters">
    <div class="content">
      <char-list
        v-for="char in $store.state.char"
        :key="char.id"
        :name="char.name"
        :nickname="char.nickname"
        :img="char.img"
        :birthday="char.birthday"
      ></char-list>
    </div>
  </div>
</template>

<script>
import CharList from "@/components/CharList.vue";
export default {
  name: "characters",

  components: {
    CharList,
  },
};
</script>

<style lang="scss">
.characters {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, #cb5eee, #4be1ec);

  .content {
    width: 1000px;
  }
}

@media screen and (max-width: 700px) {
  .characters {
    .content {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>
