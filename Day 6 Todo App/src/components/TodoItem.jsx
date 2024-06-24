import { TiDeleteOutline } from "react-icons/ti";
import { FaRegEdit } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

function TodoItem({ item, setTodos , todos}) {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);

  function completedTodo() {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === item.id
          ? { ...todo, is_completed: !todo.is_completed }
          : todo
      )
    );

    const updatedTodoList = JSON.stringify(todos);
    localStorage.setItem('Todos', updatedTodoList);
  }

  function handleInputChange(e) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === item.id ? { ...todo, todo: e.target.value } : todo
      )
    );
  }

  function handleInputBlur() {
    const updatedTodoList = JSON.stringify(todos);
    localStorage.setItem('Todos', updatedTodoList);
    setEditing(false);
  }

  function handleInputSubmit(e) {
    e.preventDefault();
    const updatedTodoList = JSON.stringify(todos);
    localStorage.setItem('Todos', updatedTodoList);
    setEditing(false);
  }

  function editTodo() {
    setEditing(true);
  }

  function handleDelete(){
    setTodos((prevTodos)=> prevTodos.filter(todo => todo.id !== item.id));
    const updatedTodoList = JSON.stringify(todos.filter(todo=> todo.id !== item.id));
    localStorage.setItem('Todos', updatedTodoList);
  }

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();

      inputRef.current.setSelectionRange(
        inputRef.current.value.length,
        inputRef.current.value.length
      );
    }
  }, [editing]);

  return (
    <>
      <li id={item?.id}>
        {editing ? (
          <>
            <form onSubmit={handleInputSubmit}>
              <input
                type="text"
                ref={inputRef}
                defaultValue={item?.todo}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
              />
            </form>
          </>
        ) : (
          <>
            <input type="checkbox" onClick={completedTodo} />
            {item?.todo}
            <div>
              <button>
                <FaRegEdit onClick={editTodo} />
              </button>
              <button>
                <TiDeleteOutline onClick={handleDelete} />
              </button>
            </div>
          </>
        )}
      </li>
    </>
  );
}

export default TodoItem;
