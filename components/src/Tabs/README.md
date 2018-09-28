### Default
```js
const { Tabs, Tab } = require('@ridi/rsg');

<Tabs>
  <Tab href="#tabs" title="일반도서" subtitle="30" active />
  <Tab href="#tabs" title="로맨스" subtitle="512" />
  <Tab href="#tabs" title="판타지 무협" subtitle="12" />
  <Tab href="#tabs" title="만화" subtitle="3" />
</Tabs>
```

### Active Color
```js
const { Tabs, Tab } = require('@ridi/rsg');

<Tabs activeColor="blue">
  <Tab href="#tabs" title="일반도서" subtitle="30" active />
  <Tab href="#tabs" title="로맨스" subtitle="512" />
  <Tab href="#tabs" title="판타지 무협" subtitle="12" />
  <Tab href="#tabs" title="만화" subtitle="3" />
</Tabs>
```

### Flex Layout
```js
const { Tabs, Tab } = require('@ridi/rsg');

<Tabs flex>
  <Tab href="#tabs" title="일반도서" subtitle="30" active />
  <Tab href="#tabs" title="로맨스" subtitle="512" />
  <Tab href="#tabs" title="판타지 무협" subtitle="12" />
  <Tab href="#tabs" title="만화" subtitle="3" />
</Tabs>
```

### Flex Layout + Active Color
```js
const { Tabs, Tab } = require('@ridi/rsg');

<Tabs activeColor="blue" flex>
  <Tab href="#tabs" title="일반도서" subtitle="30" active />
  <Tab href="#tabs" title="로맨스" subtitle="512" />
  <Tab href="#tabs" title="판타지 무협" subtitle="12" />
  <Tab href="#tabs" title="만화" subtitle="3" />
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
    title="일반도서"
    subtitle="30"
    active={state.selectedValue === Values.A}
    value={Values.A}
    onClick={handleClick}
  />
  <Tab
    title="로맨스"
    subtitle="512"
    active={state.selectedValue === Values.B}
    value={Values.B}
    onClick={handleClick}
  />
  <Tab
    title="판타지 무협"
    subtitle="12"
    active={state.selectedValue === Values.C}
    value={Values.C}
    onClick={handleClick}
  />
  <Tab
    title="만화"
    subtitle="3"
    active={state.selectedValue === Values.D}
    value={Values.D}
    onClick={handleClick}
  />
</Tabs>
```
