```js
const Values = {
  A: 'a',
  B: 'b',
  C: 'c',
};

initialState = {
  selectedValue: Values.A,
};

const onChange = e => {
  setState({
    selectedValue: e.target.value,
  });
};

<>
  <Radio
    value={Values.A}
    checked={state.selectedValue === Values.A}
    onChange={onChange}
  >
    리디북스
  </Radio><br />

  <Radio
    value={Values.B}
    checked={state.selectedValue === Values.B}
    onChange={onChange}
  >
    리디북스
  </Radio><br />

  <Radio
    value={Values.C}
    checked={state.selectedValue === Values.C}
    disabled
    onChange={onChange}
  >
    리디북스
  </Radio><br />
</>
```

### Disabled
```js
<>
  <Radio disabled onChange={() => {}}>리디북스</Radio><br />
  <Radio disabled onChange={() => {}} checked>리디북스</Radio><br />
</>
```
