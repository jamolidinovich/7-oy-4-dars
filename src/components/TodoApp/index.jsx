
import { useDispatch } from "react-redux";
import './index.css'
function TodoApp(props) {
    const {title, status, id} = props
    const dispatch = useDispatch();
    function handleDelete(id) {
        let isDelete = confirm("Are you want to delete?") 
        if(isDelete) {
          dispatch({type: "TODO__DELETE", payload: id})
        }
      }
      function handleCheck() {
        dispatch({type: 'TODO__ChECK', payload: {id: id, status: true}})
      }

      function handleReturn() {
        dispatch({type: 'TODO__ChECK', payload: {id: id, status: false}})
      }
  return (
    <div>
      <div className="card">
        <p
          className={`${
            status ? "text-[#78CFB0] line-through" : "text-[#9E78CF]"
          }`}
        >
          {title}
        </p>
        <div className="icons">
          {!status && (
            <>
              <span onClick={handleCheck} className="cursor-pointer but">
              <i className="fa-solid fa-check text-3xl "></i>
              </span>

              <i className="fa-regular fa-trash-can but text-3xl cursor-pointer"   onClick={() => {handleDelete(id);
                }}></i>
            </>
          )}
          {status && (
            <>
              <span className="cursor-pointer but" onClick={handleReturn}>
              <i className="fa-solid fa-rotate-left return text-3xl	"></i>
              
              </span>
            </>
          )}
        </div>
      </div>
      
    </div>
  );
}

export default TodoApp;
