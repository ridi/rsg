import classNames from 'classnames';
import * as React from 'react';
import { Link } from 'react-router-dom';

export interface Order {
  type: string;
  name: string;
}

export interface OrderProps {
  orders: Order[];
  activeOrderType: string;
  isMobile: boolean;
  makeURL: (order: Order) => string;
  onOrderChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Order: React.SFC<OrderProps> = (props) => {
  const { orders, isMobile, makeURL, activeOrderType, onOrderChange } = props;
  if (isMobile) {
    return (
      <div className="Orders">
        <select
          title="정렬기준 선택"
          className="OrderSelectBox"
          onChange={onOrderChange}
          value={activeOrderType}
        >
          {orders.map((order) => (
            <option
              key={order.type}
              value={order.type}
            >
              {order.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
  return (
    <div className="Orders">
      <ul>
        {orders.map((order) => (
          <li
            key={order.name}
            className={classNames(['Order', { active: order.type === activeOrderType }])}
          >
            <Link to={makeURL(order)}>{order.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
