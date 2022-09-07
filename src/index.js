import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import CharacterCounter from "./CharacterCounter";
import { RecoilRoot } from "recoil";
import TodoList from "./Todolist";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RecoilRoot>
      <CharacterCounter />
      <TodoList />
    </RecoilRoot>
  </StrictMode>
);
