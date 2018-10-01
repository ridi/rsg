import { Icon } from '@ridi/rsg';
import { Icons as IconsInterface } from '@ridi/rsg/svg/dist/icons';
import classNames from 'classNames';
import { ButtonProps } from 'dist/Button';
import * as React from 'react';

export enum CautionTheme {
  Brown = 'brown',
  Gray = 'gray',
}

export interface CautionProps {
  title?: string;
  description?: string;
  icon?: keyof IconsInterface;
  theme?: CautionTheme;
  isLayoutPortrait?: boolean;
  isAlignCenter?: boolean;
  inlineLinkPath?: string;
  inlineLinkLabel?: string;
  button?: React.SFC<ButtonProps>;
}

export const Caution: React.SFC<CautionProps> = (props) => {
  const {
    title,
    description,
    icon,
    theme = CautionTheme.Brown,
    isLayoutPortrait = false,
    isAlignCenter = false,
    inlineLinkPath,
    inlineLinkLabel,
    button,
  } = props;

  return (
    <div className={classNames([
      'RUICaution',
      `RUICaution-color-${theme}`,
      `RUICaution-layout-${isLayoutPortrait ? 'portrait' : 'vertical'}`,
      isAlignCenter && 'RUICaution-align-center',
    ])}>
      <div className="RUICaution_Cell">
        {title &&
          <h1 className="RUICaution_Title">
            {icon && <Icon className="RUICaution_Icon" name={icon} />}
            {title}
          </h1>
        }
        {description &&
          <p className="RUICaution_Description">
            {icon && !title && <Icon className="RUICaution_Icon" name={icon} />}
            {description.split('\n').map((line, index) => (
              <>
                {index > 0 && <br />}
                {line}
              </>
            ))}
            {inlineLinkPath && inlineLinkLabel &&
              <>
                <br />
                <a
                  className="RUICaution_Description_InlineLink"
                  href={inlineLinkPath}
                >
                  {inlineLinkLabel}
                  <Icon className="RUICaution_Icon" name="arrow_9_right" />
                </a>
              </>
            }
          </p>
        }
      </div>
      {button &&
        <div className="RUICaution_Cell RUICaution_Button">{button}</div>
      }
    </div>
  );
};
