import Form from "../Form";
import TodoTitle from "../TodoTitle";
import TodoItem from "../TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

function TodoApp() {
  const todos = useSelector((state) => state.todos.todos);
  const [activeTodos, setActiveTodos] = useState([]);
  const [inactiveTodos, setInactiveTodos] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const active = todos.filter((el) => el.status === true);
    const inactive = todos.filter((el) => el.status === false);
    setActiveTodos(active);
    setInactiveTodos(inactive);
  }, [todos]);

  const handleCheck = (todoId) => {
    dispatch({ type: "TODO_CHECK", payload: { id: todoId, status: false } });
    const updatedInactiveTodos = inactiveTodos.filter(
      (todo) => todo.id !== todoId
    );
    setInactiveTodos(updatedInactiveTodos);
  };

  return (
    <div className="w-[432px] mx-auto mt-48">
      <Form />
      <TodoTitle
        title="Tasks to do"
        status={false}
        count={activeTodos.length}
      />
      {activeTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.name}
          status={true}
          handleCheck={() => handleCheck(todo.id)}
        />
      ))}
      <TodoTitle title="Done" status={false} count={inactiveTodos.length} />
      {inactiveTodos.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} title={todo.name} status={false} />
      ))}
    </div>
  );
}

export default TodoApp;
