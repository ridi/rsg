```js
<SelectBox
  title="셀렉트 박스"
  onChange={() => {
    alert('change');
  }}
  value="6"
  children={
    <>
      <option value="1">옵션1</option>
      <option value="2">옵션2</option>
      <option value="3">옵션3</option>
      <optgroup label="서브옵션">
        <option value="4">서브옵션1</option>
        <option value="5">서브옵션2</option>
        <option value="6">서브옵션3</option>
      </optgroup>
    </>
  }
/>
```
```js
<SelectBox
  title="비활성화 셀렉트 박스"
  disabled={true}
  onChange={() => {
    alert('change');
  }}
  children={
    <>
      <option value="1">옵션1</option>
      <option value="2">옵션2</option>
      <option value="3">옵션3</option>
    </>
  }
/>
```
```js
<SelectBox
  title="셀렉트 박스"
  renderOutline={true}
  onChange={() => {
    alert('change');
  }}
  children={
    <>
      <option value="1">옵션1</option>
      <option value="2">옵션2</option>
      <option value="3">옵션3</option>
      <optgroup label="서브옵션">
        <option value="1">서브옵션1</option>
        <option value="2">서브옵션2</option>
        <option value="3">서브옵션3</option>
      </optgroup>
    </>
  }
/>
```
```js
<SelectBox
  title="비활성화 셀렉트 박스"
  disabled={true}
  renderOutline={true}
  onChange={() => {
    alert('change');
  }}
  children={
    <>
      <option value="1">옵션1</option>
      <option value="2">옵션2</option>
      <option value="3">옵션3</option>
    </>
  }
/>
```
