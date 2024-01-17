import React from "react";

const InputWithLabel = (props) => {
  const inputRef = React.useRef();

  React.useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <>
      {/* <label htmlFor="todoTitle">Title:</label> */}
      <label htmlFor="todoTitle">{props.chiledren}</label>
      <br />
      <input
        ref={inputRef}
        type="text"
        id="todoTitle"
        name={props.label}
        value={props.todoTitle}
        onChange={props.handleTitleChange}
        required
      />
      <br />
    </>
  );
};

export default InputWithLabel;
