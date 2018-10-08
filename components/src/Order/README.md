### dash devider
```js
<Order
  orders={[
    { type: 'recent', name: '최신순' },
    { type: 'grade', name: '평점순' },
  ]}
  activeOrderType="recent"
  isMobile={false}
  makeURL={() => {}}
  onOrderChange={() => {}}
/>
```

### dot devider
```js
<Order
  orders={[
    { type: 'recent', name: '최신순' },
    { type: 'grade', name: '평점순' },
  ]}
  deviderType="dot"
  activeOrderType="recent"
  isMobile={false}
  makeURL={() => {}}
  onOrderChange={() => {}}
/>
```
