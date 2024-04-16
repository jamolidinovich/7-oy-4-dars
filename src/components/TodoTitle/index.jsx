import React from "react";

function TodoTitle(props) {
  const { title, count } = props;
  return (
    <div>
      <h3 className="text-white text-lg mb-3">
        {title}-{count}
      </h3>
    </div>
  );
}

export default TodoTitle;
