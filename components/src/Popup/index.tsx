import { Button, Icon } from '@ridi/rsg';
import classNames from 'classnames';
import * as React from 'react';

export interface PopupProps {
  title: string;
  active: boolean;
  caution?: React.ReactElement<any>;
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
  isSubmitting?: boolean;
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
    isSubmitting,
  } = props;
  const wrapperClass = classNames(['RUIPopup', active && 'active']);
  return (
    <div className={wrapperClass}>
      <div className="RUIPopup_Dimmed_Bg" onClick={onCancel} />
      <div className="RUIPopup_Contents">
        <div className="RUIPopup_Header">
          <div className="RUIPopup_Header_Nav">
            <h3 className="RUIPopup_Title">{title}</h3>
            <button className="RUIPopup_Close_Button" onClick={onCancel}>
              <Icon
                name="close_2"
                className="RUIPopup_Close_Icon"
              />
              <span className="a11y">닫기</span>
            </button>
          </div>
          {caution && <div className="RUIPopup_Alert">
            <Icon
              name="exclamation_3"
              className="RUIPopup_Alert_Icon"
            />{caution}
          </div>}
          {!!tabs.length && (
            <ul className="RUIPopup_Header_TabList">
              {tabs.map((tab, idx) => (
                <li
                  className="RUIPopup_Header_Tab"
                  onClick={() => onTabClick(idx)}
                  key={`tabList_${idx}`}
                >
                  <button
                    className={classNames(['RUIPopup_Header_TabButton', idx === activeTabIndex && 'active'])}
                  >
                    {tab.name}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div
          className="RUIPopup_Body"
          style={{ height: !!bodyHeight ? bodyHeight + 'px' : 'auto', overflowY: 'auto' }}
        >
          {!!tabs.length
            ? tabs[activeTabIndex].content
            : <div className="RUIPopup_Body_Paragraph">{children}</div>
          }
        </div>
        {useButtons && (
          <div className="RUIPopup_Footer RUIPopup_LastBlock">
            {showFooterHr && <hr className="RUIPopup_Footer_hr" />}
            <ul className="RUIPopup_ButtonsWrapper">
              {cancelButtonName && (
                <li className="RUIPopup_ButtonsList">
                  <Button
                    type="button"
                    color="gray"
                    outline={true}
                    size="medium"
                    onClick={onCancel}
                  >
                    {cancelButtonName}
                  </Button>
                </li>
              )}
              {confirmButtonName && (
                <li className="RUIPopup_ButtonsList">
                  <Button
                    color="blue"
                    size="medium"
                    disabled={isSubmitting}
                    spinner={isSubmitting}
                    onClick={onConfirm}
                  >
                    {confirmButtonName}
                  </Button>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
