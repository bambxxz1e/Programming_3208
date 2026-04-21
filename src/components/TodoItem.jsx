import Checkbox from "./Checkbox.jsx"
import Button from "./Button.jsx"

export default function TodoItem({ todo, toggleTodo }) {
    return (
        // todo.isCompleted가 true 면 " todo__item--complete", false ""
        <li className={`todo__item${todo.isCompleted ? " todo__item--complete" : ""}`}>
            <Checkbox
                id={todo.id}
                checked={todo.isCompleted}
                onChange={() => toggleTodo(todo.id)}
            >{todo.text}</Checkbox>
            <Button className="todo__button todo__button--edit">🤺</Button>
            <Button className="todo__button todo__button--delete">🗑️</Button>
        </li>
    )
}