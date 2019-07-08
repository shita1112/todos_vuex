<template lang="pug">
  div
    span 絞り込み：
    //- 更新しないのでkey属性は不要
    label(v-for="status in statuses")
      input(
        type="radio"
        name="statusToFilter"
        :value="status"
        v-model="statusToFilter"
        @change="changeStatusToFilter(status)")

      |{{ status }}
</template>


<script>
import { mapActions } from 'vuex';

export default {
  name: 'FilterStateRadioButtons',
  data() {
    return {
      statuses: ['all', 'todo', 'doing', 'done'],
    };
  },
  computed: {
    statusToFilter: {
      get() { return this.$store.state.statusToFilter; },
      set(status) { this.$store.dispatch('changeStatusToFilter', status); },
    },
  },
  methods: mapActions(['changeStatusToFilter']),
};
</script>
