"use client";

import { TodoItem } from "@/types/TodoItem";
import { useState } from "react";

export default function Home() {
  const [itemInput, setItemInput] = useState("");
  const [list, setList] = useState<TodoItem[]>([]);

  const handleAddButton = () => {
    if (itemInput.trim() !== "") {
      setList([
        ...list,
        { id: list.length + 1, label: itemInput, checked: false },
      ]);
      setItemInput("");
    }
  };

  const deleteItem = (id: number) => {
    setList(list.filter((item) => item.id !== id));
  };

  const toggleItem = (id: number) => {
    // setList(
    //   list.map((item, i) => {
    //     if (i === index) {
    //       return { ...item, checked: !item.checked };
    //     }
    //     return item;
    //   })
    // );

    // const newList = [...list];
    // newList[index].checked = !newList[index].checked;
    // setList(newList);

    // let newList = [...list];
    // newList = newList.map((item) => {
    //   if (item.id === id) {
    //     return { ...item, checked: !item.checked };
    //   }
    //   return item;
    // });
    // setList(newList);

    let newList = [...list];

    for (let i in newList) {
      if (newList[i].id === id) {
        newList[i].checked = !newList[i].checked;
        break;
      }
    }

    setList(newList);
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
        {list.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              onClick={() => toggleItem(item.id)}
              checked={item.checked}
              className="w-6 h-6 mr-4"
            />
            {item.label} -{" "}
            <button
              onClick={() => deleteItem(item.id)}
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
