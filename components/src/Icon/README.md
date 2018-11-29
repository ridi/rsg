```js
const icons = require('@ridi/rsg/svg/dist/icons');

<div>
  {
    Object.keys(icons).map((name) => (
      <div
        key={name} 
        style={{
          margin: '10px',
          display: 'inline-block',
          textAlign: 'center',
        }}
      >
        <Icon name={name} />
        <div style={{ fontSize: '12px' }}>{name}</div>
      </div>
    ))
  }
</div>
```
