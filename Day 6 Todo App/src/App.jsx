import { useEffect, useState } from "react";
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    const storedTodos = localStorage.getItem('Todos');
    if(storedTodos){
      setTodos(JSON.parse(storedTodos))
    }
  },[])

  return (
    <>
    <div className=" w-full h-screen p-10 bg-slate-500 relative">
      <CreateTodo setTodos={setTodos} todos={todos}/>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
    </>
  );
}

export default App;
