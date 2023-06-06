import { Todo } from '../models/todo.model';

export const todos: Todo[] = [
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

export function getTodos() {
	return todos.slice();
}

export function addTodo(todo: Todo) {
	todos.push(todo);
}
