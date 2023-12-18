import React from 'react'
import styled from 'styled-components';

import { TestData } from '../model/testdata';

interface Props {
  item: TestData,
  todos: TestData[],
  setTodos: React.Dispatch<React.SetStateAction<TestData[]>>,
  isDone:Boolean
}

function Todos({item, isDone, setTodos}: Omit<Props, 'todos'>) {
  
  const handleOnClickIsDoneBtn = () => {
    setTodos((prev) =>
      prev.map((i) => {
        if (i.id === item.id) {
          return {...i, isDone: !i.isDone}
        } else {
          return i;
        }
      })
    )
  }

  const handleOnClickDeleteBtn = () => {
    if (window.confirm('삭제하시겠습니까?')) {
      setTodos(prev => prev.filter((i) => i.id !== item.id))
    }
  }

  return (
    <div>
      <StCardContainer key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
            <StCardBtn onClick={handleOnClickIsDoneBtn}>{isDone === false ? '완료' : '취소'}</StCardBtn>
            <StCardBtn onClick={handleOnClickDeleteBtn}>삭제</StCardBtn>
          </StCardContainer>
    </div>
  )
}

export default Todos;

const StCardContainer = styled.div`
  background-color: rgb(244, 250, 252);
  color: #035bff;
  padding: 1rem;
  border: 1px solid white;
  box-shadow: 3px 2px 15px 0 #03A9F4;
  border-radius: 1rem;
  width: 15rem;
  margin: 1rem;
  h2 {
    font-size: 1.2rem;
    padding-bottom: 1rem;
  }
  p {
    color: #0141b9;
    font-size: 1rem;
    padding-bottom: 1rem;
  }
`;

const StCardBtn = styled.button`
  padding: 0.2rem 1rem;
  margin-right: 0.7rem;
  color: #03A9F4;
  font-weight: bolder;
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid white;
  box-shadow: 3px 2px 15px 0 #03A9F4;
  transition: 0.3s;
  &:hover {
    background-color: #035bff;
    color: white;
    cursor: pointer;
  }
`;