### 开发步骤指引

- 1.RecoilRoot 放父组建
- 2.Atom 一个 Atom 代表一个状态
  tip: 任何 atom 的更新都将致使使用对应 atom 的组件重新渲染
- 3.应该引入并使用 useRecoilState()
- 4.selector 代表一个派生状态，派生状态是状态的转换(更改状态)