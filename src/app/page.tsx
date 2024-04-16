"use client";

import { TodoItem } from "@/types/TodoItem";
import { useState } from "react";

export default function Home() {
  const [itemInput, setItemInput] = useState("");
  const [list, setList] = useState<TodoItem[]>([]);

  const handleAddButton = () => {
    if (itemInput.trim() !== "") {
      setList([...list, { label: itemInput, checked: false }]);
      setItemInput("");
    }
  };

  const deleteItem = (index: number) => {
    setList(list.filter((_, i) => i !== index));
  };
  return (
    <div className="w-screen h-screen flex flex-col items-center text-2xl">
      <h1 className="text-4xl mt-5">Lista de Tarefas</h1>

      <div className="flex w-full max-w-lg my-3 p-4 rounded-md bg-gray-700 border-2 border-gray-400">
        <input
          type="text"
          placeholder="O que deseja fazer?"
          className="flex-1 border border-black p-3 text-2xl text-black rounded-md mr-3"
          value={itemInput}
          onChange={(e) => setItemInput(e.target.value)}
        />
        <button onClick={handleAddButton}>Adicionar</button>
      </div>

      <p className="my-4">Tarefas: {list.length}</p>

      <ul className="w-full max-w-lg list-disc pl-5">
        {list.map((item, index) => (
          <li key={index}>
            {item.label} -{" "}
            <button
              onClick={() => deleteItem(index)}
              className="hover:underline"
            >
              [deletar]
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
