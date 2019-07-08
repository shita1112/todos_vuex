<template>
  <div>
    <span>件数：</span>
    <span>{{ todosCount }}件</span>
  </div>
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
