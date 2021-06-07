import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/ExpansionPanel";
import AccordionSummary from "@material-ui/core/ExpansionPanelSummary";
import AccordionDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import AddTodo from "./AddTodo";
// import Item from "./TodoItem";

let myStyle = {
  minHeight: "70vh",
  margin: "40px auto",
};

let hstyle = {
  margin: "10px auto",
  textAlign: "center",
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

function Todos(props) {
  // const [clicked, setclicked] = useState(false);
  const classes = useStyles();

  function addTodo(todo) {
    console.log(todo);
    props.addTodo(todo);
  }

  // function showItem(todo) {
  //   console.log("todo", todo);
  //   setclicked(!clicked);
  //   if (clicked) {
  //     return <Item desc={todo.desc} />;
  //   } else null;
  // }

  function removeItem(id) {
    props.onDelete(id);
  }

  return (
    <div style={myStyle}>
      <AddTodo addTodo={addTodo} />
      <h3 style={hstyle}> List </h3>
      {props.todoList.length ? (
        props.todoList.map((todo) => {
          return (
            <>
              <div>
                <div className={classes.root}>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      className="btn btn-outline-info "
                    >
                      <Typography className={classes.heading}>
                        <h4>{todo.title} </h4>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>{todo.desc}</Typography>
                    </AccordionDetails>
                  </Accordion>
                  <button
                    className="btn btn-primary"
                    onClick={() => removeItem(todo.sno)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </>
          );
        })
      ) : (
        <h4 className="text-center">List Empty</h4>
      )}
    </div>
  );
}

export default Todos;
