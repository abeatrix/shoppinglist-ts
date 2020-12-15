import "./App.css"

interface TodoListItemProps {
    todo: Todo;
    toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleTodo }) => {

    return <li className="list">
            <label className={todo.complete ? "completed" : undefined}>
                <input type="checkbox" checked={todo.complete} onChange={()=>toggleTodo(todo)} />{todo.text}
            </label>
        </li>;

}
