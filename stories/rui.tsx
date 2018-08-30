import { storiesOf } from '@storybook/react';
import { divide } from 'lodash-es';
import * as React from 'react';
// import '../../rui/rui/css/rui.css';
import { Button, CheckBox, Empty, FetchRetryBlock, Popup } from '../components';
import '../components/dist/components.css';
import '../stylesheets/dist/rui-no-reset.css';

storiesOf('RUI', module)
  .add('Popup: Default', () => (
    <>
      <Popup
        title="팝업 제목"
        onCancel={() => alert('Canceled')}
        onConfirm={() => alert('Confirmed')}
        active={true}
        caution="위험합니다."
      >
        팝업 내용입니다.
      </Popup>
    </>
  ))
  .add('Popup: Tabs', () => (
    <>
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
    </>
  ))
  .add('Empty', () => (
    <>
      <Empty
        title="타이틀입니다."
        subtitle="서브 타이틀입니다."
        linkText="링크링크"
        linkURL="ridibooks.com"
        onLinkClick={(e) => {
          e.preventDefault();
          alert('clicked');
        }}
      />
    </>
  ))
  .add('FetchRetryBlock', () => (
    <>
      <FetchRetryBlock title="리디북스" onRetry={() => null} />
    </>
  ))
  .add('Button', () => (
    <>
      <Button>리디북스</Button><br />
      <Button color="blue">리디북스</Button><br />
      <Button outline={true}>리디북스</Button><br />
      <Button thickBorderWidth={true}>리디북스</Button><br />
      <Button size="large">리디북스</Button><br />
      <Button color="blue" onClick={() => alert('Hey')}>리디북스 (클릭)</Button><br />
      <Button color="blue" spinner={true}>Spinning</Button><br />
      <Button href="https://select.ridibooks.com">Go to RIDI Select</Button>
      <Button
        component={(props) => (
          <div>
            <a href={props.href} className={props.className}>
              {props.children}
            </a>
          </div>
        )}
        href="https://ridibooks.com"
      >
        Customized Wrapper (which can be used for `react-router-dom`)
      </Button>
    </>
  ))
  .add('CheckBox', () => (
    <>
      <CheckBox checked={false} onChange={() => null}>리디북스</CheckBox><br />
      <CheckBox checked={false} disabled={true} onChange={() => null}>리디북스</CheckBox><br />
      <CheckBox checked={true} onChange={() => null}>리디북스</CheckBox><br />
      <CheckBox checked={true} disabled={true} onChange={() => null}>리디북스</CheckBox><br />
      <CheckBox checked={true} disabled={true} onChange={() => null}>리디북스</CheckBox><br />
    </>
  ));
