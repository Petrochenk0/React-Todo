import React from "react";
import Chek from "./Chek";
import cn from 'classnames'
import { FaRegTrashAlt } from 'react-icons/fa';
import {MdAdd}  from 'react-icons/md';

const TodoItem = ({ itemDefaultName, changeTodo, deleteTodo, addTodo }) => {
  return (
    <div
      className="flex items-center
        mb-5
        justify-between
        rounded-2xl bg-gray-700
        p-5
        w-full"
    >
      <button className="flex items-center" onClick={() => changeTodo(itemDefaultName._id)}>

        <Chek isBool={itemDefaultName.isBool} />
        <span
          className={cn({
            'line-through': itemDefaultName.isBool,
          })}
        >
          {itemDefaultName.title}
        </span>
      </button>
  
      <button onClick={() => deleteTodo(itemDefaultName._id)}>
        <FaRegTrashAlt className="text-white-600 hover:text-red-700" size={22} />
      </button>
          
      
    </div>

    
  );
};

export default TodoItem;