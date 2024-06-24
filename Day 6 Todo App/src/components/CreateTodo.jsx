function CreateTodo({ setTodos, todos }) {


  function handleSubmit(e) {
    e.preventDefault();
    let value = e.target.todo.value;
    const newTodo = {id: self.crypto.randomUUID(), todo: value, is_completed: false}
    setTodos((prevTodos) => [ ...prevTodos, newTodo]);

    //Store updated todo list in local storage
    const updatedTodoList = JSON.stringify([...todos, newTodo]);
    localStorage.setItem('Todos', updatedTodoList);
    e.target.reset();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo"
          id="todo"
          placeholder="Enter the Todos..."
        />
        <button>Add Todo</button>
      </form>
    </>
  );
}

export default CreateTodo;
