import { ChangeEvent, useState, FormEvent } from 'react';
import styled from 'styled-components'
import { v4 as uuidv4 } from "uuid";

import { TestData } from '../model/testdata';

interface Props {
  todos: TestData[],
  setTodos: React.Dispatch<React.SetStateAction<TestData[]>>,
}

function Form({setTodos}: Props) {

  const [title, setTitle] = useState<string>('');
  const [text, setText] = useState<string>('');

  const handleOnChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  };
  const handleOnChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }
 
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title === '' || text === '')
    return alert('제목과 내용을 모두 입력해주세요')
    const newTodo: TestData =
      {
        id: uuidv4(),
        title,
        text,
        isDone: false,
      }
    setTodos((prev) => [newTodo, ...prev])
    setTitle('');
    setText('');
  }

  return (
    <StFormContainer onSubmit={onSubmit}>
      <StInputWrapper>
        <StLabel htmlFor='title'>Title</StLabel>
        <StInput id='title' type='text' value={title} onChange={handleOnChangeTitle} />
        <StLabel htmlFor='text'>Text</StLabel>
        <StInput id='text' type='text' value={text} onChange={handleOnChangeText} />
      </StInputWrapper>
      <StButton type='submit'>Add</StButton>
    </StFormContainer>
  )
}

export default Form

const StFormContainer = styled.form`
  padding: 0 2rem 2rem 2rem;
  display: flex;
  @media screen and (max-width: 43.5rem) {
    flex-direction: column;
    button {
      margin-top: 1.5rem;
    }
  }
`;

const StInputWrapper = styled.div`
  display: flex;
  padding-right: 1rem;
  @media screen and (max-width: 40rem) {
    padding-right: 0;
    flex-direction: column;
  }
`;

const StLabel = styled.label`
  font-size: 1.2rem;
  text-shadow: 0.1rem 0.1rem 0.1rem #03A9F4;
  padding: 0 1rem;
  line-height: 150%;
`;

const StInput = styled.input`
  color: #0f3d68;
  font-size: 1rem;
  background: transparent;
  border: none;
  border-bottom: solid #aaaaaa 0.1rem;
  outline: none;
  &:focus {
    border-bottom: solid #0f3d68 0.1rem;
  }
`;

const StButton = styled.button`
  font-size: 1rem;
  border-radius: 0.5rem;
  padding: 0 1rem;
  color: #03A9F4;
  font-weight: bolder;
  background-color: transparent;
  border: 1px solid white;
  box-shadow: 3px 2px 15px 0 #03A9F4;
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    background-color: #035bff;
    color: white;
  }
`;
