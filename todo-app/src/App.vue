<template>
  <div id="app">
        <todo-list></todo-list>
  </div>
</template>

<script>
import TodoList from './components/TodoList';

export default {
  name: 'app',
  components: {
    TodoList,
  },
  data()  {
	  return {
		  todos:[{
		  	title: 'Todo A',
			project: 'Project A',
			done: false
		},  {
		  	title: 'Todo B',
			project: 'Project B',
			done: false
		
		},{
		  	title: 'Todo C',
			project: 'Project C',
			done: false
		
		},{
		  	title: 'Todo D',
			project: 'Project D',
			done: false
		

		}],
	  };
  },
};
</script>

<style>
</style>
