<template lang="pug">
  #app
    CreateTodoTextField
    TodoList
    FilterStateRadioButtons
    TodosCount
</template>

<script>
import CreateTodoTextField from './components/CreateTodoTextField.vue';
import TodoList from './components/TodoList.vue';
import FilterStateRadioButtons from './components/FilterStateRadioButtons.vue';
import TodosCount from './components/TodosCount.vue';

export default {
  name: 'app',
  components: {
    CreateTodoTextField,
    TodoList,
    FilterStateRadioButtons,
    TodosCount,
  },
};
</script>
