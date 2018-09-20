import { Icon } from '@ridi/rsg';
import { Icons } from '@ridi/rsg/svg/dist/icons';
import * as React from 'react';

export interface EmptyProps {
  title?: string;
  description?: string;
  linkText?: string;
  linkUrl?: string;
  className?: string;
  iconName: keyof Icons;
  onLinkClick?: (e: React.SyntheticEvent<any>) => void;
}

export const Empty: React.SFC<EmptyProps> = (props) => {
  const { title, description, linkText, linkUrl, onLinkClick, iconName, className } = props;
  const shouldDisplayLink = !!linkText && !!linkUrl;
  return (
    <div className={`rui_empty_1 ${className}`}>
      <Icon className="empty_mark" name={iconName} />
      {title && <h3 className="empty_title">{title}</h3>}
      {description && (
        <p className="empty_description">
          {description}
          {shouldDisplayLink && (
            <>
              <br />
              <a onClick={onLinkClick} href={linkUrl}>
                {linkText} <Icon className="right_arrow_icon" name="arrow_9_right" />
              </a>
            </>
          )}
        </p>
      )}
    </div>
  );
};
