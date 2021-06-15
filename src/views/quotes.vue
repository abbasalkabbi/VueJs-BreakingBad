<template>
  <div class="quotes">
    <div class="content">
      <quote-list
        v-for="quote in $store.state.quotes"
        :key="quote"
        :author="quote.author"
        :quote="quote.quote"
      ></quote-list>
    </div>
  </div>
</template>
<script>
import QuoteList from "@/components/QuoteList.vue";
export default {
  components: {
    QuoteList,
  },
};
</script>
<style lang="scss">
.quotes {
  background: linear-gradient(to right, #cb5eee, #4be1ec);
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, #cb5eee, #4be1ec);
  .content {
    width: 1000px;
    margin: auto;
  }
}

@media screen and (max-width: 700px) {
  .quotes {
    .content {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>
