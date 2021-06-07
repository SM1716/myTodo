import React, { useState } from "react";

function AddTodo(props) {
  const [todo, setTodo] = useState({
    title: "",
    desc: "",
  });

  function change(event) {
    const { id, value } = event.target;
    console.log(value);

    setTodo((prevValue) => {
      return {
        ...prevValue,
        [id]: value,
      };
    });
  }

  function add(e) {
    e.preventDefault();
    if (!todo.title || !todo.desc) {
      alert("Title or Description missing!!");
    } else {
      console.log(todo);
      console.log("AddTodo");
      props.addTodo(todo);
      setTodo({
        title: "",
        desc: "",
      });
    }
  }

  return (
    <div className="container my-3">
      <h3> Add a ToDo </h3>
      <form onSubmit={add}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            value={todo.title}
            onChange={change}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            value={todo.desc}
            onChange={change}
            className="form-control"
            id="desc"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
