import classNames from 'classnames';
import * as React from 'react';
import { Link } from 'react-router-dom';

export interface PopupProps {
  title: string;
  active: boolean;
  caution?: string;
  tabs?: Array<{
    name: string;
    content: React.ReactElement<any>;
  }>;
  activeTabIndex?: number;
  onTabClick?: (index: number) => void;
  useButtons?: boolean;
  showFooterHr?: boolean;
  cancelButtonName?: string;
  onCancel: () => void;
  confirmButtonName?: string;
  onConfirm?: () => void;
  bodyHeight?: number;
}

const noop = (): any => null;

export const Popup: React.SFC<PopupProps> = (props) => {
  const {
    title,
    active,
    children,
    caution,
    activeTabIndex = 0,
    tabs = [],
    onTabClick = noop,
    useButtons = false,
    showFooterHr = true,
    cancelButtonName,
    onCancel = noop,
    confirmButtonName,
    onConfirm = noop,
    bodyHeight,
  } = props;
  const wrapperClass = classNames(['rui_popup', active && 'active']);
  return (
    <div className={wrapperClass}>
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
        <div className="popup_body" style={{ height: !!bodyHeight ? bodyHeight + 'px' : 'auto', overflowY: 'auto' }}>
          {!!tabs.length
            ? tabs[activeTabIndex].content
            : <div className="popup_body_paragraph">{children}</div>
          }
        </div>
        {useButtons && (
          <div className="popup_footer last_block">
            {showFooterHr && <hr className="popup_footer_hr" />}
            <ul className="popup_buttons_wrapper">
              {cancelButtonName && (
                <li className="button_list">
                  <button
                    type="button"
                    className="button rui_button_white_40"
                    onClick={onCancel}
                  >
                    {cancelButtonName}
                  </button>
                </li>
              )}
              {confirmButtonName && (
                <li className="button_list">
                  <button
                    type="button"
                    className="button rui_button_blue_40"
                    onClick={onConfirm}
                  >
                    {confirmButtonName}
                  </button>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
