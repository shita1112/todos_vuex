<template lang="pug">
  input(
    type="text"
    autofocus
    placeholder="タスク名"
    v-model="todoText"
    @keypress.enter="addTodo"
  )
</template>

<script>
export default {
  name: 'CreateTodoTextField',
  data() {
    return {
      todoText: '',
    };
  },
  methods: {
    addTodo() {
      if (this.todoText) {
        this.$store.dispatch('addTodo', this.todoText);
        this.todoText = '';
      }
    },
  },
};
</script>
