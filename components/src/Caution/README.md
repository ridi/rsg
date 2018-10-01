```js
<>
  <Caution
    title="카트에 저장된 책이 너무 많습니다."
    description="서비스를 쾌적하게 이용하기 위해 카트에 200권의 책만 담을 수 있습니다.\n최근 담은 200권의 책을 제외하고 위시리스트로 옮겨드리겠습니다."
    icon="exclamation_2"
    inlineLinkPath="/"
    inlineLinkLabel="위시리스트로 이동"
    button={
      <Button color="brown" size="large">위시리스트로 이동</Button>
    }
  />
  <br /><br />
  <Caution
    title="카트에 저장된 책이 너무 많습니다."
    description="서비스를 쾌적하게 이용하기 위해 카트에 200권의 책만 담을 수 있습니다.\n최근 담은 200권의 책을 제외하고 위시리스트로 옮겨드리겠습니다."
    icon="exclamation_2"
    theme="gray" // CautionTheme.Gray
    isLayoutPortrait={true}
    isAlignCenter={true}
    inlineLinkPath="/"
    inlineLinkLabel="위시리스트로 이동"
    button={<Button color="gray">위시리스트로 이동</Button>}
  />
  <br /><br />
  <Caution
    description="서비스를 쾌적하게 이용하기 위해 카트에 200권의 책만 담을 수 있습니다.\n최근 담은 200권의 책을 제외하고 위시리스트로 옮겨드리겠습니다."
    icon="exclamation_2"
    theme="gray" // CautionTheme.Gray
    isLayoutPortrait={true}
    inlineLinkPath="/"
    inlineLinkLabel="위시리스트로 이동"
  />
  <br /><br />
  <Caution
    description="서비스를 쾌적하게 이용하기 위해 카트에 200권의 책만 담을 수 있습니다.\n최근 담은 200권의 책을 제외하고 위시리스트로 옮겨드리겠습니다."
    icon="exclamation_2"
    theme="gray" // CautionTheme.Gray
    isLayoutPortrait={true}
    isAlignCenter={true}
    button={<Button color="blue">위시리스트로 이동</Button>}
  />
</>
```
