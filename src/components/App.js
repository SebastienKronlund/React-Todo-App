import React, { useState } from "react";
import "../styles/App.css";
import Form from "./Form";
import TodoList from "./TodoList";
import PropTypes from 'prop-types';

function App() {
  const [formInputs, setFormInputs] = useState({ title: "", description: "" });
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App">
      <Form
        setFormInputs={setFormInputs}
        formInputs={formInputs}
        setTodoList={setTodoList}
        todoList={todoList} />
      <TodoList
        todoList={todoList}
        setTodoList={setTodoList} />
    </div>
);
}

Form.propTypes = {
	setFormInputs: PropTypes.func,
	formInputs: PropTypes.objectOf(PropTypes.string),
	setTodoList: PropTypes.func,
	todoList: PropTypes.arrayOf(PropTypes.object),
};

TodoList.propTypes = {
	
}

export default App;
