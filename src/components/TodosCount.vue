<template lang="pug">
  div
    span 件数：
    span {{ todosCount }}件
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TodosCount',
  computed: {
    ...mapGetters(['todosFilteredByStatus']),
    todosCount() {
      return this.todosFilteredByStatus.length;
    },
  },
};
</script>
