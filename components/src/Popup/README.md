```js
<Popup
  title="팝업 제목"
  onCancel={() => alert('Canceled')}
  onConfirm={() => alert('Confirmed')}
  active={true}
  caution="위험합니다."
>
  팝업 내용입니다.
</Popup>
```

```js
<Popup
  title="안녕하세요"
  caution="위험합니다."
  tabs={[{
    content: <h1>1번 탭의 내용입니다</h1>,
    name: '1번 탭',
  }, {
    content: <h1>2번 탭의 내용입니다</h1>,
    name: '2번 탭',
  }]}
  activeTabIndex={0}
  onTabClick={(idx) => alert(idx)}
  onCancel={() => alert('Canceled')}
  onConfirm={() => alert('Confirmed')}
  active={true}
/>
```
