### Default
```js
const { Tabs, Tab } = require('@ridi/rsg');

<Tabs>
  <Tab href="#tabs" active>일반도서</Tab>
  <Tab href="#tabs">로맨스</Tab>
  <Tab href="#tabs">판타지 무협</Tab>
  <Tab href="#tabs">만화</Tab>
</Tabs>
```

### Active Color
```js
const { Tabs, Tab } = require('@ridi/rsg');

<Tabs activeColor="blue">
  <Tab href="#tabs" active>일반도서</Tab>
  <Tab href="#tabs">로맨스</Tab>
  <Tab href="#tabs">판타지 무협</Tab>
  <Tab href="#tabs">만화</Tab>
</Tabs>
```

### Flex Layout
```js
const { Tabs, Tab } = require('@ridi/rsg');

<Tabs flex>
  <Tab href="#tabs" active>일반도서</Tab>
  <Tab href="#tabs">로맨스</Tab>
  <Tab href="#tabs">판타지 무협</Tab>
  <Tab href="#tabs">만화</Tab>
</Tabs>
```

### Flex Layout + Active Color
```js
const { Tabs, Tab } = require('@ridi/rsg');

<Tabs activeColor="blue" flex>
  <Tab href="#tabs" active>일반도서</Tab>
  <Tab href="#tabs">로맨스</Tab>
  <Tab href="#tabs">판타지 무협</Tab>
  <Tab href="#tabs">만화</Tab>
</Tabs>
```

### Using `onClick`
```js
const { Tabs, Tab } = require('@ridi/rsg');

const Values = {
  A: 'a',
  B: 'b',
  C: 'c',
  D: 'd',
};

initialState = {
  selectedValue: Values.A,
};

const handleClick = (event, value) => {
  setState({ selectedValue: value });
};

<Tabs>
  <Tab
    active={state.selectedValue === Values.A}
    value={Values.A}
    onClick={handleClick}
  >
    일반도서
  </Tab>
  <Tab
    active={state.selectedValue === Values.B}
    value={Values.B}
    onClick={handleClick}
  >
    로맨스
  </Tab>
  <Tab
    active={state.selectedValue === Values.C}
    value={Values.C}
    onClick={handleClick}
  >
    판타지 무협
  </Tab>
  <Tab
    active={state.selectedValue === Values.D}
    value={Values.D}
    onClick={handleClick}
  >
    만화
  </Tab>
</Tabs>
```
