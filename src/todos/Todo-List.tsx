import classes from './Todo-List.module.scss';
import { Todo } from './models/todo.model';
import TodoItemComponent from './todo-item/Todo-Item';

export default function TodoListComponent() {
	// todo items
	const todoItems: Todo[] = [
		{
			id: '1',
			name: 'Todo1',
		},
		{
			id: '2',
			name: 'Todo2',
		},
		{
			id: '3',
			name: 'Todo3',
		},
	];

	return (
		<div className={classes['list-container']}>
			<ul className={classes.list}>
				{todoItems.map((todoItem) => (
					<TodoItemComponent todo={todoItem} key={todoItem.id} />
				))}
			</ul>
		</div>
	);
}
