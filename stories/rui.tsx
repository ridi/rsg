import { storiesOf } from '@storybook/react';
import * as React from 'react';
import '../../rui/rui/css/rui.css';
import { Empty, FetchRetryBlock, Popup } from '../components';

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
  ));
