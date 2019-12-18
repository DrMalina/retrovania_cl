import React from 'react';

import { Button } from 'components/Button';
import { DateEditor } from 'components/DateEditor';
import { Link } from 'components/Link';

import * as S from './Cart.styles';

const Cart = ({ cart, removeItem }) =>
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
        {cart.map(game => (
          <tr key={game._id}>
            <td>
              <Link to={`/games/${game._id}`}>{game.name}</Link>
            </td>
            <td>{new Date(game.from).toLocaleDateString()}</td>
            <td>{new Date(game.to).toLocaleDateString()}</td>
            <td>
              <Button onClick={() => removeItem(game._id)}>Delete</Button>
              <DateEditor
                activator={({ setIsOpened }) => (
                  <Button onClick={() => setIsOpened(true)}>Edit</Button>
                )}
                data={game}
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
