import React, { useState } from "react";

const CreateElement = ({ addTodo, setTodos }) => {
  const [title, setTitle] = useState("");

  console.log(title);

  const handleAddTodo = (title) => {
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
    setTitle("");
  };

  return (
    <div className="flex items-center mb-5 justify-between rounded-2xl bg-zink-800 p-5 w-full border-2 px-5 py-3">
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        onKeyPress={(e) => e.key === "Enter" && handleAddTodo(title)}
        className="bg-transparent w-full outline-none font-bold border-none border-transparent"
        placeholder="Enter your todo"
      />
    </div>
  );
};

export default CreateElement;