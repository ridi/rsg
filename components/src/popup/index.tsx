import classNames from 'classnames';
import * as React from 'react';
import { Link } from 'react-router-dom';

export interface PopupProps {
  title: string;
  active: boolean;
  activeTabIndex?: number;
  caution?: string;
  onTabClick?: (index: number) => void;
  onCancel: () => void;
  onConfirm: () => void;
  children?: string;
  tabs?: Array<{
    name: string;
    content: React.ReactElement<any>;
  }>;
}

const noop = (): any => null;

export const Popup: React.SFC<PopupProps> = (props) => {
  const {
    active,
    title,
    children,
    caution,
    activeTabIndex = 0,
    onTabClick = noop,
    onCancel = noop,
    onConfirm = noop,
    tabs = [],
  } = props;
  const wrapperClass = classNames(['rui_popup', active && 'active']);
  return (
    <div id="test_popup" className={wrapperClass}>
      <div className="popup_dimmed_bg" onClick={onCancel} />
      <div className="popup_contents">
        <div className="popup_header">
          <div className="popup_header_nav">
            <h3 className="popup_title">{title}</h3>
            <button className="popup_close_button" onClick={onCancel}><span className="close_icon">닫기</span></button>
          </div>
          {caution && <p className="popup_alert"><span className="alert_icon" />{caution}</p>}
          {!!tabs.length && (
            <ul className="popup_header_tab_wrapper">
              {tabs.map((tab, idx) => (
                <li className="popup_header_tab" onClick={() => onTabClick(idx)}>
                  <button className={classNames(['tab_button', idx === activeTabIndex && 'active'])}>{tab.name}</button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="popup_body">
          {!!tabs.length
            ? tabs[activeTabIndex].content
            : <p className="popup_body_paragraph">{children}</p>
          }
          {/* <p className="popup_body_paragraph">RUI 팝업내용입니다.</p> */}
        </div>
        <div className="popup_footer last_block">
          <hr className="popup_footer_hr" />
          <ul className="popup_buttons_wrapper">
            <li className="button_list">
              <button type="button" className="button rui_button_white_40" onClick={onCancel}>취소</button>
            </li>
            <li className="button_list">
              <button type="button" className="button rui_button_blue_40" onClick={onConfirm}>확인</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
