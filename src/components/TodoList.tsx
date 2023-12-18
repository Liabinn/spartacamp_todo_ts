import React from 'react';
import { v4 as uuidv4 } from "uuid";
import Todos from './Todos';
import styled from 'styled-components';

import { TestData } from '../model/testdata';

interface Props {
  todos:TestData[],
  setTodos: React.Dispatch<React.SetStateAction<TestData[]>>,
  isDone:Boolean
}

const TodoList: React.FC<Props> = ({todos, setTodos, isDone}) => {

  return (
    <StCardListContainer>
      <StCardListTitle>{isDone === false ? '진행중...🐕' : '완료✨'}</StCardListTitle>
      <StCardWrapper>
      {todos.filter(item => item.isDone === isDone)
      .map((item: TestData) => {
        return (
          <Todos item={item} isDone={isDone} setTodos={setTodos} />
        )
      })}
      </StCardWrapper>
    </StCardListContainer>
  ) 
}

export default TodoList

const data: TestData[] = [
  {
    id: uuidv4(),
    title: '운동하기',
    text: '우유 산책하기',
    isDone: true,
  },
  {
    id: uuidv4(),
    title: '공부하기',
    text: '자바스크립트 공부하기',
    isDone: false,
  },
  {
    id: uuidv4(),
    title: '과제하기',
    text: '과제 1단계 끝내기',
    isDone: false,
  },
  {
    id: uuidv4(),
    title: '밥먹기',
    text: '비프토마토스튜 해먹기',
    isDone: true,
  },
  {
    id: uuidv4(),
    title: 'TIL 쓰기',
    text: '저녁 9시 전에 쓰고 제출하기',
    isDone: false,
  },
]

const StCardListContainer = styled.div`
  padding: 2rem;
`;

const StCardListTitle = styled.h1`
  font-size: 1.5rem;
  text-shadow: 0.1rem 0.1rem 0.1rem #03A9F4;
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
`;

const StCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
