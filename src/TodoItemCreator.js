import { useSetRecoilState } from "recoil";
import { useState } from "react";
import { todoListState } from "./recoil";

const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);
  // 用于创建唯一 id 的工具函数
  let id = 0;
  function getId() {
    return id++;
  }

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false
      }
    ]);
    setInputValue("");
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
};

export default TodoItemCreator;
