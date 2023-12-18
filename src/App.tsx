import React, { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';
import './App.css';

import { TestData } from './model/testdata';

const App: React.FC = () => {

  const [todos, setTodos] = useState<TestData[]>(data);

  return (
    <div>
      <Header />
      <Form todos={todos} setTodos={setTodos} />
      <TodoList isDone={false} todos={todos} setTodos={setTodos} />
      <TodoList isDone={true} todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;

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