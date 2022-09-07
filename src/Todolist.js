import { useRecoilValue } from "recoil";
import TodoItemCreator from "./TodoItemCreator";
import { todoListState } from "./recoil";
const TodoList = () => {
  const todoList = useRecoilValue(todoListState);

  return (
    <>
      {/* <TodoListStats /> */}
      {/* <TodoListFilters /> */}
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
};

const TodoItem = ({ key, item }) => {
  return <div key={key}>{item.text}</div>;
};
export default TodoList;
