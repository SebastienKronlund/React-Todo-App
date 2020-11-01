import React from 'react';
import '../styles/Todo.css';
import PropTypes from 'prop-types';

const Todo = ({ todo, todoList, setTodoList }) => {
  const toggleComplete = e => {
    const targetTodo = e.target.parentNode.parentNode;

    targetTodo.classList.toggle('completed');
    targetTodo.querySelector('.remove-button').classList.toggle('activateHiddenElement');

    e.target.textContent === 'Done'
      ? (e.target.textContent = 'Undo')
      : (e.target.textContent = 'Done');

    setTodoList(
      todoList.map(item => {
        return item.key === todo.key
          ? {...item, completed: !item.completed}
          : item;
      }),
    );
  };

  const removeTodo = () => {
    setTodoList(todoList.filter(item => item !== todo));
  };

  return (
    <li className="list-item">
      <h4 className="item-title">{todo.title}</h4>
      <p className="item-description">{todo.description}</p>
      <div className="list-button-container">
        <button type="button" className="buttons item-button" onClick={e => toggleComplete(e)}>
          Done
        </button>
        <button type="button" className="buttons remove-button" onClick={() => removeTodo()}>
          Delete
        </button>
      </div>
    </li>
  );
};

Todo.propTypes = {
  todo: PropTypes.shape({
    key: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired,
	setTodoList: PropTypes.func.isRequired,
	todoList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Todo;
