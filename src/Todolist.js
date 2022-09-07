import { useRecoilValue } from "recoil";
import TodoItemCreator from "./TodoItemCreator";
import { todoListState } from "./recoil";
import TodoItem from "./TodoItem";
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

export default TodoList;
