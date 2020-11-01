import React from 'react';
import Todo from './Todo';
import '../styles/TodoList.css';
import PropTypes from 'prop-types';

const TodoList = ({ todoList, setTodoList }) => (
  <section className="list-section">
    <ul className="list">
      {todoList.map(todo => (
        <Todo key={todo.key} todo={todo} todoList={todoList} setTodoList={setTodoList} />
      ))}
    </ul>
  </section>
);

TodoList.propTypes = {
	setTodoList: PropTypes.func.isRequired,
	todoList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TodoList;
