import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { HiArrowLeft } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { HiMiniArrowUturnLeft } from "react-icons/hi2";

function TodoItem(props) {
  const { title, status, id } = props;
  const [todoStatus, setTodoStatus] = useState(status);
  const dispatch = useDispatch();

  useEffect(() => {
    setTodoStatus(status);
  }, [status]);

  function handleCheck() {
    setTodoStatus(false);
    dispatch({ type: "TODO_CHECK", payload: { id: id, status: false } });
  }

  function handleDelet() {
    dispatch({ type: "TODO_DELETE", payload: { id: id } });
  }
  function handleRolback() {
    dispatch({ type: "TODO_CHECK", payload: { id: id, status: true } });
  }
  return (
    <div
      className={`flex items-center justify-between bg-[#15101C] p-[26px] rounded-lg mb-[16px] ${
        todoStatus ? "" : "opacity-50"
      }`}
    >
      <p
        className={
          todoStatus ? "text-[#9E78CF]" : "text-[#78CFB0] line-through"
        }
      >
        {title}
      </p>
      <div className="flex items-center justify-between gap-3">
        {todoStatus && (
          <>
            <span onClick={handleCheck} className="cursor-pointer">
              <FaCheck color="#9E78CF" fontSize={"22px"} />
            </span>
            <span onClick={handleDelet} className="cursor-pointer">
              <FaTrashAlt color="#9E78CF" fontSize={"22px"} />
            </span>
          </>
        )}
        {!todoStatus && (
          <>
            <span onClick={handleRolback} className="cursor-pointer">
              <HiMiniArrowUturnLeft color="#9E78CF" fontSize={"29px"} />
            </span>
          </>
        )}
      </div>
    </div>
  );
}

export default TodoItem;
