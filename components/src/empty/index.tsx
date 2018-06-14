import classNames from 'classnames';
import * as React from 'react';
import { Icons } from '../../../svg/dist/icons';

export interface EmptyProps {
  title?: string;
  description?: string;
  linkText?: string;
  linkURL?: string;
  className?: string;
  iconName: keyof Icons;
  onLinkClick?: (e: React.SyntheticEvent<any>) => void;
}

export const Empty: React.SFC<EmptyProps> = (props) => {
  const { title, description, linkText, linkURL, onLinkClick, iconName, className } = props;
  const shouldDisplayLink = !!linkText && !!linkURL;
  return (
    <div className={`rui_empty_1 ${className}`}>
      <span className={`empty_mark icon-${iconName}`} />
      {title && <h3 className="empty_title">{title}</h3>}
      {description && (
        <p className="empty_description">
          {description}
          {shouldDisplayLink && (
            <>
              <br />
              <a onClick={onLinkClick} href={linkURL}>
                {linkText} <span className="right_arrow_icon" />
              </a>
            </>
          )}
        </p>
      )}
    </div>
  );
};
