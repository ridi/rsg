import classNames from 'classnames';
import * as React from 'react';
import { Link } from 'react-router-dom';

export interface EmptyProps {
  title: string;
  subtitle: string;
  linkText?: string;
  linkURL?: string;
  onLinkClick?: (e: React.SyntheticEvent<any>) => void;
}

const noop = (): any => null;

export const Empty: React.SFC<EmptyProps> = (props) => {
  const { title, subtitle, linkText, linkURL, onLinkClick } = props;
  const shouldDisplayLink = !!linkText && !!linkURL;
  return (
    <div className="rui_empty_1"><span className="empty_mark icon-cart_1" />
      <h3 className="empty_title">{title}</h3>
      <p className="empty_description">{subtitle}
        {shouldDisplayLink && <>
          <br /><a onClick={onLinkClick} href={linkURL}>{linkText} <span className="right_arrow_icon" /></a>
        </>}
      </p>
    </div>
  );
};
