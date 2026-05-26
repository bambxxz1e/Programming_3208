import { useState } from "react"
import TodoItemEmpty from "./TodoItemEmpty.jsx"
import TodoItem from "./TodoItem.jsx"

export default function TodoList({ todos, ...rest }) {
    // 최신순 / 오래된순 상태
    const [sortType, setSortType] = useState("latest");

    // 정렬된 todos
    const sortedTodos = [...todos].sort((a, b) => {
        if (sortType === "latest") {
            return b.id - a.id // 최신순
        } else {
            return a.id - b.id // 오래된순
        }
    })
    
    return (
        <>
             {/* 정렬 드롭다운 */}
            <div className="todo__sort">
                <select
                    value={sortType}
                    onChange={(e) => setSortType(e.target.value)}
                >
                    <option value="latest">최신순</option>
                    <option value="oldest">오래된순</option>
                </select>
            </div>

            <ul className="todo__list">
                {/* todos가 없으면, TodoItemEmpty */}
                {todos.length === 0 && <TodoItemEmpty />}
                {/* todos가 있으면, TodoItem에 todos 던지기 */}
                {todos.length > 0 &&
                    // todos에서 하나씩 꺼내서 todo -> <TodoItem todo={todo} />
                    sortedTodos.map((todo) => <TodoItem key={todo.id} todo={todo} {...rest} />)
                }
            </ul>
        </>
    )
}