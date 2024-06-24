import TodoItem from "./TodoItem";

function TodoList({ todos, setTodos }) {
  return (
    <>
      <ol className="todo_list">
        {todos && todos.length > 0 ? (
          todos?.map((item, index) => (
            <TodoItem key={index} item={item} setTodos={setTodos}  todos={todos}/>
          ))
        ) : (
          <p>Seems lonely in here, what are you up to?</p>
        )}
      </ol>
    </>
  );
}

export default TodoList;
