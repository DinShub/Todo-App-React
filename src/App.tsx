import React from 'react';

import classes from './App.module.scss';
import TodoListComponent from './todos/Todo-List';

export default function App() {
	return (
		<div className={classes['content-wrapper']}>
			<h1 className={classes.title}>Todo App</h1>
			<TodoListComponent />
		</div>
	);
}
