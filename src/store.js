import Vue from 'vue';
import Vuex from 'vuex';
import uuid from './utils/uuid';

Vue.use(Vuex);

const STATUSES = ['todo', 'doing', 'done'];
const LocalStragePlugin = (store) => {
  store.subscribe((_, { todos }) => {
    localStorage.setItem('todos', JSON.stringify(todos));
  });
};

export default new Vuex.Store({
  state: {
    todos: JSON.parse(localStorage.getItem('todos')) || [],
    statusToFilter: 'all',
  },

  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo);
    },
    editTodo(state, { todo, text = todo.text, status = todo.status }) {
      todo.id = uuid();
      todo.text = text;
      todo.status = status;
    },
    changeStatusToFilter(state, statusToFilter) {
      state.statusToFilter = statusToFilter;
    },
    removeTodo(state, todo) {
      const index = state.todos.indexOf(todo);
      state.todos.splice(index, 1);
    },

  },

  actions: {
    addTodo({ commit }, text) {
      commit('addTodo', {
        id: uuid(),
        text,
        status: 'todo',
      });
    },
    removeTodo({ commit }, todo) {
      commit('removeTodo', todo);
    },
    editTodo({ commit }, { todo, value }) {
      commit('editTodo', { todo, text: value });
    },
    changeStatus({ commit }, todo) {
      const index = (STATUSES.indexOf(todo.status) + 1) % STATUSES.length;
      commit('editTodo', { todo, status: STATUSES[index] });
    },
    changeStatusToFilter({ commit }, statusToFilter) {
      commit('changeStatusToFilter', statusToFilter);
    },
  },

  getters: {
    todosFilteredByStatus(state) {
      if (state.statusToFilter === 'all') return state.todos;

      return state.todos.filter(todo => todo.status === state.statusToFilter);
    },
  },

  plugins: [LocalStragePlugin],
});
