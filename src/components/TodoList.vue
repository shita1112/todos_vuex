<template lang="pug">
  table
    thead
      tr
        th タスク名
        th 状態
        th
    tbody
      TodoListItem(
        v-for="todo in todosFilteredByStatus"
        :key="todo.id"
        :todo="todo")
</template>


<script>
import { mapGetters } from 'vuex';
import TodoListItem from './TodoListItem.vue';

export default {
  name: 'TodoList',
  components: { TodoListItem },
  computed: mapGetters(['todosFilteredByStatus']),
};
</script>
