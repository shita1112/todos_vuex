<template lang="pug">
  tr(:class="trClass")
    td
      | {{ todo.text }}
    td
      button(@click="changeStatus(todo)") {{ todo.status }}
    td
      button(@click="removeTodo(todo)") 削除
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'TodoListItem',
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  computed: {
    trClass() {
      return { [this.todo.status]: true };
    },
  },
  methods: mapActions(['removeTodo', 'changeStatus']),
};
</script>


<style lang="scss" scoped>
.todo {
  background-color: #fff;
}
.doing {
  background-color: #0ff;
}
.done {
  background-color: #888;
}
</style>
