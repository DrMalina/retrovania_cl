import React from 'react';

import { Button } from 'components/Button';
import { DateEditor } from 'components/DateEditor';
import { Link } from 'components/Link';

import * as S from './Cart.styles';

const Cart = ({ cart, cartRemoveItem }) =>
  cart && cart.length ? (
    <S.CartTable>
      <S.CartTableHead>
        <tr>
          <td>Game name</td>
          <td>Date from</td>
          <td>Date to</td>
          <td>Actions</td>
        </tr>
      </S.CartTableHead>
      <tbody>
        {cart.map(product => (
          <tr key={product._id}>
            <td>
              <Link to={`/games/${product._id}`}>{product.name}</Link>
            </td>
            <td>{product.from}</td>
            <td>{product.to}</td>
            <td>
              <Button onClick={() => cartRemoveItem(product._id)}>
                Delete
              </Button>
              <DateEditor
                activator={({ setIsOpened }) => (
                  <Button onClick={() => setIsOpened(true)}>Edit</Button>
                )}
                data={product}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </S.CartTable>
  ) : (
    <p>You haven't added any products to your cart yet.</p>
  );

export { Cart };
