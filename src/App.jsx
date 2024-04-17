
import TodoApp from'./components/TodoApp'
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  const todoRef = useRef(null);
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const [activeTodos, setActiveTodos] = useState([])
  const [inactiveTodos, setInActiveTodos] = useState([])
  const todoss = useSelector(state => state.todos.todos);
 
  const validate = () => {
    if (!todoRef.current.value.trim()) {
      alert("Task is not empty!");
      return false;
    }
    if (todoRef.current.value.length <= 3 || todoRef.current.value.length >= 45) {
      alert("Task ni togri kiriting");
      return false;
    }
    return true;
  };

  function handleForm(e) {
    e.preventDefault();
    const isValidate = validate();
    if (isValidate) {
      const todo = {
        name: todoRef.current.value,
        id: Date.now(),
        status: false
      };
      dispatch({ type: "TODO__ADD", payload: todo });
      todoRef.current.value = null
    }
  }


 
 
  
  useEffect(() => {
    let active = todoss.filter(el => {
      return el.status == false
    })

    setActiveTodos(active)
    let inactive = todoss.filter(el => {
      return el.status == true
    }) 
    setInActiveTodos(inactive)
  }, [todoss])
  console.log(todoss);
  return (
    <>
      <div className="w-[500px] mx-auto mt-16 py-[50px] px-[20px] gap-4">
        <div className="header_input">
          <input ref={todoRef} type="text" placeholder="Add a new task" />
          {/* <h1 src={<i className="fa-solid fa-plus"></i>} alt="plus" className="image"  /> */}
          <button onClick={handleForm}><i className="fa-solid fa-plus text-white py-[9px] bg-[#9E78CF] px-[15px] raunded-lg text-3xl	rounded-lg"></i></button>
        </div>
        <div className="tasks_todo">
          <p className="title">Tasks to do - {activeTodos.length}</p>
          <div className="todo_cards gap-6 flex" >
            {todoss.length > 0 &&
              activeTodos.map((todo, index) => {
                return (
                 <TodoApp title = {todo.name} id={todo.id} key = {index} status ={todo.status}/>
                )
              })}
          </div>
        </div>
        <div className="tasks_todo">
          <p className="title mt-4">Done - {inactiveTodos.length}</p>
          <div className="todo_cards gap-6 flex" >
            {todos.length > 0 &&
              inactiveTodos.map((todo, index) => {
                return (
                 <TodoApp title = {todo.name} id={todo.id} key = {index} status = {todo.status}/>
                )
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
