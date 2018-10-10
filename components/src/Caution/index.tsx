import { ButtonProps, Icon } from '@ridi/rsg';
import { Icons as IconsInterface } from '@ridi/rsg/svg/dist/icons';
import classNames from 'classnames';
import * as React from 'react';

export enum CautionTheme {
  Brown = 'brown',
  Gray = 'gray',
}

export interface CautionInlineLinkProps {
  component?: React.ReactType;
  label?: string;
  [extraKey: string]: any;
}

export interface CautionProps {
  title?: string;
  description?: string;
  icon?: keyof IconsInterface;
  className?: string;
  theme?: CautionTheme;
  isLayoutPortrait?: boolean;
  isAlignCenter?: boolean;
  inlineLink?: CautionInlineLinkProps;
  button?: React.SFC<ButtonProps>;
}

export const Caution: React.SFC<CautionProps> = (props) => {
  const {
    title,
    description,
    icon,
    className,
    theme = CautionTheme.Brown,
    isLayoutPortrait = false,
    isAlignCenter = false,
    inlineLink = {},
    button,
  } = props;

  const {
    component: inlineLinkComponent,
    label: inlineLinkLabel,
    ...inlineLinkExtraProps,
  } = inlineLink;

  const InlinLink = inlineLinkComponent || 'a';

  return (
    <div className={classNames([
      'RUICaution',
      `RUICaution-color-${theme}`,
      `RUICaution-layout-${isLayoutPortrait ? 'portrait' : 'vertical'}`,
      isAlignCenter && 'RUICaution-align-center',
      className,
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
            {inlineLinkLabel &&
              <>
                <br />
                <InlinLink
                  className="RUICaution_Description_InlineLink"
                  {...inlineLinkExtraProps}
                >
                  {inlineLinkLabel}
                  <Icon className="RUICaution_Icon" name="arrow_9_right" />
                </InlinLink>
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
