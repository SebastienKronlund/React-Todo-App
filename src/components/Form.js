import React from "react";
import uuid from "react-uuid";
import "../styles/Form.css";
import PropTypes from 'prop-types';

const Form = ({ todoList, formInputs, setFormInputs, setTodoList }) => {
	const updateFormInput = (e) => {
		e.target.className === "input-title"
			? setFormInputs({ title: e.target.value, description: formInputs.description })
			: setFormInputs({ title: formInputs.title, description: e.target.value });
	};

	const clearInputs = (el) => {
		const inputs = el.querySelectorAll("input");
		inputs.forEach((input) => (input.value = ""));
		setFormInputs({ title: "", description: "" });
	};

	const submitForm = (e) => {
		e.preventDefault();

		const newTodo = {
			key: uuid(),
			title: formInputs.title,
			description: formInputs.description,
			completed: false,
		};
		setTodoList([...todoList, newTodo]);
		clearInputs(e.target);
	};

  return (
    <section className="form-section">
      <h1 className="form-section-header">Seb&apos; Todolist</h1>
      <form className="form" onSubmit={(e) => submitForm(e)}>
        <input
          type="text"
          name="input-title"
          className="input-title"
          placeholder="Title here .."
          autoComplete="off"
          onChange={(e) => updateFormInput(e)}
          required />

        <input
          type="text"
          name="input-description"
          className="input-description"
          placeholder="Description here .."
          autoComplete="off"
          onChange={(e) => updateFormInput(e)}
          required />

        <button className="form-submit" type="submit">
          Submit!
        </button>
      </form>
    </section>
  );
};

Form.propTypes = {
	setFormInputs: PropTypes.func.isRequired,
	formInputs: PropTypes.objectOf(PropTypes.string).isRequired,
	setTodoList: PropTypes.func.isRequired,
	todoList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Form;
