<template>
  <table>
    <thead>
      <tr>
        <th>タスク名</th>
        <th>状態</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <TodoListItem
        v-for="todo in todosFilteredByStatus"
        :key="todo.id"
        :todo="todo"
      />
    </tbody>
  </table>
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
