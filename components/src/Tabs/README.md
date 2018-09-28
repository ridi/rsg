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

initialState = {
  selectedValue: 'a',
};

<Tabs>
  <Tab
    title="일반도서"
    subtitle="30"
    active={state.selectedValue === 'a'}
    onClick={() => setState({ selectedValue: 'a' })}
  />
  <Tab
    title="로맨스"
    subtitle="512"
    active={state.selectedValue === 'b'}
    onClick={() => setState({ selectedValue: 'b' })}
  />
  <Tab
    title="판타지 무협"
    subtitle="12"
    active={state.selectedValue === 'c'}
    onClick={() => setState({ selectedValue: 'c' })}
  />
  <Tab
    title="만화"
    subtitle="3"
    active={state.selectedValue === 'd'}
    onClick={() => setState({ selectedValue: 'd' })}
  />
</Tabs>
```
