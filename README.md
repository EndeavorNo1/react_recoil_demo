### 开发步骤指引

- 1.RecoilRoot 放父组建
- 2.Atom 一个 Atom 代表一个状态
  tip: 任何 atom 的更新都将致使使用对应 atom 的组件重新渲染
- 3.应该引入并使用 useRecoilState()

  ```
  //1 拿数据-useRecoilValue
  //2 拿方法-useSetRecoilState
  //3 拿数据+方法-useRecoilState
  ```

- 4.selector 代表一个派生状态，派生状态是状态的转换(更改状态)
- 5.报错处理-ErrorBoundary
- 6.处理待定 (pending) 数据-React.Suspense
- 7.带参数查询 - selectorFamily
- 8.并行请求-waitForAll
- 9. waitForNone 来对用户界面进行增量更新。
