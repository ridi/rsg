import classNames from 'classnames';
import * as React from 'react';
import { GrandChildrenProps as ComponentProps } from '../index';

export default (): React.SFC<ComponentProps> => (props) => {
  const { className, setPlaceholder } = props;

  const Placeholder = setPlaceholder(props.required);
  if (Placeholder) { return <Placeholder />; }

  return (
    <p className={classNames('RSGBookMetadata_Flatrate', className)}>
      자유이용권<span className="invisible"> 사용가능</span>
        <span className="icon-ticket_1 RSGBookMetadata_FlatrateIcon"/>
    </p>
  );
};
