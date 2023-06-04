import classes from './Todo-Item.module.scss';
import { Todo } from '../models/todo.model';

// primeReact
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';

type TodoItemComponentProps = {
	todo: Todo;
};

export default function TodoItemComponent(props: TodoItemComponentProps) {
	const { todo } = props;
	return (
		<li className={classes['list-item']}>
			<div className={classes['list-item--content']}>
				<p className={classes.title}>{todo.name}</p>
				<div className={classes.actions}>
					<Button
						tooltip='Mark as Done'
						tooltipOptions={{ position: 'bottom' }}
					>
						<i className='pi pi-check'></i>
					</Button>
					<Button tooltip='Delete item' tooltipOptions={{ position: 'bottom' }}>
						<i className='pi pi-trash'></i>
					</Button>
				</div>
			</div>
		</li>
	);
}
