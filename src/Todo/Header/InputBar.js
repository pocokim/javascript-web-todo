import React, { useState } from "react";
import styled from "styled-components";
import nextId from "react-id-generator";
import { useTodosDispatchValue } from "../../StateHelper/TodoState";

const Form = styled.form`
  height: 4em;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: 2rem;
`;

// InputBar의 리 랜더링은 StateProvider 때문에 생김 
export default function InputBar() {
  const id = nextId();
  const dispatch = useTodosDispatchValue();
  const [newTodo, setNewTodo] = useState("");

  const handleChangeInput = ({ target: { value } }) => {
    setNewTodo(value);
  };

  const handleAddtodo = e => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      title: newTodo,
      id
    });
    setNewTodo("");
  };

  // console.log(dispatch,"dispatch");
  return (
    <Form>
      <label>enter todo : </label>
      <input value={newTodo} onChange={handleChangeInput} />
      <button onClick={handleAddtodo}>Submit</button>
    </Form>
  );
}