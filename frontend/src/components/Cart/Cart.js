import React from 'react';

import { DateEditor } from 'components/DateEditor';

import { unixTimestampToDate } from 'common/helpers';

import * as S from './Cart.styles';

const Cart = ({ cart, removeItem }) =>
  cart && cart.length ? (
    <S.CartWrapper>
      <S.CartTable>
        <S.CartTableHead>
          <tr>
            <th>Game name</th>
            <th>Rental from</th>
            <th>Rental to</th>
            <th>Actions</th>
          </tr>
        </S.CartTableHead>
        <S.CartTableBody>
          {cart.map(game => (
            <tr key={game._id}>
              <td>
                <S.CartLink to={`/games/${game._id}`}>{game.name}</S.CartLink>
              </td>
              <td>
                {new Date(unixTimestampToDate(game.from)).toLocaleDateString()}
              </td>
              <td>
                {new Date(unixTimestampToDate(game.to)).toLocaleDateString()}
              </td>
              <td>
                <S.CartActionButton onClick={() => removeItem(game._id)}>
                  <span>Delete</span>
                  <S.TrashIcon />
                </S.CartActionButton>
                <DateEditor
                  activator={({ setIsOpened }) => (
                    <S.CartActionButton onClick={() => setIsOpened(true)}>
                      <span>Edit</span>
                      <S.PencilIcon />
                    </S.CartActionButton>
                  )}
                  rentalFrom={unixTimestampToDate(game.from)}
                  rentalTo={unixTimestampToDate(game.to)}
                  game={game}
                />
              </td>
            </tr>
          ))}
        </S.CartTableBody>
      </S.CartTable>
      <S.CartCheckout>
        <p>
          Games in cart: <S.Highlight>{cart.length}</S.Highlight>
        </p>
        <S.CartButton>Order</S.CartButton>
      </S.CartCheckout>
    </S.CartWrapper>
  ) : (
    <p>You haven't added any products to your cart yet.</p>
  );

export { Cart };
