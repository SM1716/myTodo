import React, { useState, useEffect } from "react";
import Header from "./Header";
import Todos from "./Todos";
import Footer from "./Footer";
import About from "./About";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("list") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("list"));
  }

  const addTodo = ({ title, desc }) => {
    let id;
    if (list.length === 0) {
      id = 0;
    } else {
      id = list[list.length - 1].sno + 1;
    }
    const todo = {
      title: title,
      desc: desc,
      sno: id,
    };

    console.log(todo);
    console.log("App");
    // console.log("list", [...list, todo]);
    setList([...list, todo]);
  };

  const onDelete = (id) => {
    setList(
      list.filter((t) => {
        return t.sno !== id;
      })
    );
  };

  const [list, setList] = useState(initTodo);

  useEffect(() => {
    // console.log("list", list);
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <>
      <Router>
        <Header title="My Todos List" searchBar={false} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <Todos
                    todoList={list}
                    addTodo={addTodo}
                    onDelete={onDelete}
                  />
                </>
              );
            }}
          ></Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
