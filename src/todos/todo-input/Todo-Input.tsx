import { InputText } from 'primereact/inputtext';

import classes from './Todo-Input.module.scss';
import { KeyboardEventHandler, useState, KeyboardEvent } from 'react';

type TodoInputComponentProps = {
	addTodo: Function;
};

export default function TodoInputComponent(props: TodoInputComponentProps) {
	const [inputValue, setInputValue] = useState('');

	const onKeyDownHandler: KeyboardEventHandler = (event: KeyboardEvent) => {
		if (event.key === 'Enter') {
			props.addTodo(inputValue);
			setInputValue('');
		}
	};

	return (
		<InputText
			value={inputValue}
			onChange={(event) => setInputValue(event.target.value)}
			className={classes['todo-input']}
			placeholder='Enter New Task'
			onKeyDown={onKeyDownHandler}
		/>
	);
}
