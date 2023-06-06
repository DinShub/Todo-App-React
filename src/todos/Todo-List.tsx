import { useState } from 'react';
import classes from './Todo-List.module.scss';
import { Todo } from './models/todo.model';
import { addTodo, getTodos } from './services/todo.service';
import TodoInputComponent from './todo-input/Todo-Input';
import TodoItemComponent from './todo-item/Todo-Item';

export default function TodoListComponent() {
	// todo items
	const [todoItems, setTodoItems] = useState<Todo[]>(getTodos());

	const fetchTodos = () => {
		setTodoItems(getTodos());
	};

	const addTodoHandler = (input: string) => {
		// find new id
		const newId = todoItems.length + 1;
		addTodo({ id: `${newId}`, name: input });
		fetchTodos();
	};

	return (
		<div className={classes['list-container']}>
			<TodoInputComponent addTodo={addTodoHandler} />
			<ul className={classes.list}>
				{todoItems.map((todoItem) => (
					<TodoItemComponent todo={todoItem} key={todoItem.id} />
				))}
			</ul>
		</div>
	);
}
