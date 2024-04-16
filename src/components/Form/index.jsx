import { useRef } from "react";
import plus from "../../assets/Plus.svg";
import { useDispatch } from "react-redux";
function Form() {
  const nameRef = useRef(null);
  const dispatch = useDispatch();
  function handleClick(e) {
    e.preventDefault();
    if (nameRef.current.value.length > 3) {
      const todo = {
        id: Date.now(),
        name: nameRef.current.value,
        status: true,
      };
      dispatch({ type: "TODO_ADD", payload: todo });
      nameRef.current.value = null;
    }
  }
  return (
    <div className="flex items-center gap justify-between mb-[59px]">
      <input
        className="w-[382px] py-[9px] pl-3 bg-transparent border-2 border border-[#3E1671] rounded-xl text-white focus:outline-none"
        type="text"
        ref={nameRef}
        placeholder="Add a new task"
      />
      <button
        onClick={handleClick}
        className="w-[40px] bg-[#9E78CF] rounded-xl p-[9px]"
      >
        <img width={"22px"} height={"22px"} src={plus} alt="" />
      </button>
    </div>
  );
}

export default Form;
