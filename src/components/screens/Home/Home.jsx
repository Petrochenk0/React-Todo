import React, { useState } from 'react';
import TodoItem from './item/TodoItem';
import CreateElement from './CreateTodo/CreateElement.jsx';

const titleToDo = 'QuestMaster Todo 🌟';
const data = [
  {
    _id: '1',
    title: 'Название определенной задачи для выполнения', // пишем просто название для теста базы данных
    isBool: false, //по дефолту стоит false так как задача сначала не выполнена
  },
  {
    _id: '2',
    title: 'Прочитать 200 книг за год',
    isBool: false,
  },
  {
    _id: '3',
    title: 'Проснуться в 5 утра',
    isBool: false,
  },
  {
    _id: '4',
    title: 'Сходить за хлебом',
    isBool: false,
  },
  {
    _id: '5',
    title: 'Дописать проект',
    isBool: false,
  },
];

const Home = () => {
  const [todos, setTodos] = useState(data);
  const [title, setTitle] = useState('');

  const changeTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo._id === id) {
          return {
            ...todo,
            isBool: !todo.isBool,
          };
        }
        return todo;
      });
    });
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo._id !== id);
    });
  };

  const addTodo = (title) => {
    setTodos((prevTodos) => {
      return [
        {
          title,
          _id: Date.now().toString(),
          isBool: false,
        },
        ...prevTodos,
      ];
    });
    setTitle('');
  };

  window.addTodo = addTodo;

  return (
    <div className="text-white w-4/5 mx-auto">
      <h1 className="text-2xl font-bold text-center mb-5">{titleToDo}</h1>
      {todos.map((todo) => (
        <div key={todo._id}>
          <TodoItem
            itemDefaultName={todo}
            changeTodo={changeTodo}
            deleteTodo={() => deleteTodo(todo._id)}
          />
        </div>
      ))}
      <CreateElement addTodo={addTodo} setTodos={setTodos} />
    </div>
  );
};

export default Home;
