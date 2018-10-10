import { SelectBox } from '@ridi/rsg';
import classNames from 'classnames';
import * as React from 'react';

export interface Order {
  type: string;
  name: string;
}

export interface OrderProps {
  orders: Order[];
  deviderType?: 'dot' | 'dash';
  component?: React.ReactType;
  activeOrderType: string;
  isMobile: boolean;
  makeURL: (order: Order) => string;
  onOrderChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Order: React.SFC<OrderProps> = (props) => {
  const {
    orders,
    isMobile,
    deviderType = 'dash',
    makeURL,
    activeOrderType,
    onOrderChange,
    component,
  } = props;

  const LinkButton = component || 'a';

  if (isMobile) {
    return (
      <div className="RUIOrder">
        <SelectBox
          title="정렬기준 선택"
          className="RUIOrder_SelectBox"
          renderOutline={true}
          onChange={onOrderChange}
        >
          {orders.map((order) => (
            <option
              key={order.type}
              value={order.type}
              selected={activeOrderType === order.type}
            >
              {order.name}
            </option>
          ))}
        </SelectBox>
      </div>
    );
  }

  return (
    <div
      className={classNames(
        'RUIOrder',
        `RUIOrder-${deviderType}`,
      )}
    >
      <ul>
        {orders.map((order) => (
          <li
            key={order.name}
            className={classNames(
              'RUIOrder_Item',
              { active: order.type === activeOrderType },
            )}
          >
            <LinkButton
              className="RUIOrder_Button"
              href={makeURL(order)}
            >
              {order.name}
            </LinkButton>
          </li>
        ))}
      </ul>
    </div>
  );
};
