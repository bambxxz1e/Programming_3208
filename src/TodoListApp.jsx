import "./todolist.css"

function TodoListApp() {
  return (
    <div className="todo">
      <h1 className="todo__title">ToDo ToDo</h1>
      <form className="todo__form">
        <input type="text" className="todo__input" placeholder="할 일을 입력하세요."/>
        <button type="submit" className="todo__button todo__button--add">Add</button>
      </form>
      <ul className="todo__list">
        <li className="todo__item todo__item--empty">
          <p>할 일 없음</p>
        </li>
        <li className="todo__item todo__item--complete">
          <input type="checkbox" className="todo__check" name="" id="chk-1" />
          <label htmlFor="chk-1" className="todo__label">옷 싸기</label>
          <button className="todo__button todo__button--edit">🤺</button>
          <button className="todo__button todo__button--delete">🗑️</button>
        </li>
      </ul>
    </div>
  )
}

export default TodoListApp