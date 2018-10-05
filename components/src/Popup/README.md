```jsx
class PopupExample extends React.Component {
  constructor() {
    this.state = {
      popupStatus: false,
    };
  }
  render() {
    return (
      <>
        <Button
          onClick={() => this.setState({
            popupStatus: !this.state.popupStatus,
          })}
        >
           팝업 토글
        </Button>
        <Popup
          title="팝업 제목"
          onCancel={() => this.setState({
            popupStatus: false,
          })}
          onConfirm={() => alert('Confirmed')}
          caution="위험합니다."
          active={this.state.popupStatus}
        >
          팝업 내용입니다.
        </Popup>
      </>
    )
  }
}

<PopupExample />
```

```jsx
class TabPopupExample extends React.Component {
  constructor() {
    this.state = {
      popupStatus: false,
    };
  }
  render() {
    return (
      <>
        <Button
          onClick={() => this.setState({
            popupStatus: !this.state.popupStatus,
          })}
        >
           팝업 토글
        </Button>
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
          active={this.state.popupStatus}
          activeTabIndex={0}
          onTabClick={(idx) => alert(idx)}
          onCancel={() => this.setState({
            popupStatus: false,
          })}
          onConfirm={() => alert('Confirmed')}
        />
      </>
    );
  }
}

<TabPopupExample />
```
