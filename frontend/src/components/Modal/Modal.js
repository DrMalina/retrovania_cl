import React, { useState } from 'react';
import { createPortal } from 'react-dom';

import * as S from './Modal.styles';

const Modal = ({
  activator,
  closeText = 'cancel',
  children,
  confirmAttrs = {},
  confirmText = 'confirm',
  onConfirm,
  onClose = () => {},
  title
}) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleButtonClick = fn => {
    fn();
    setIsOpened(false);
  };

  const content = (
    <S.Backdrop isOpened={isOpened}>
      <S.Modal as='dialog'>
        <S.ModalHeading>{title}</S.ModalHeading>
        <div>{children}</div>
        <S.ModalActionsWrapper>
          <S.ModalButton onClick={() => handleButtonClick(onClose)}>
            {closeText}
          </S.ModalButton>
          {onConfirm && (
            <S.ModalButton
              onClick={() => handleButtonClick(onConfirm)}
              {...confirmAttrs}
            >
              {confirmText}
            </S.ModalButton>
          )}
        </S.ModalActionsWrapper>
      </S.Modal>
    </S.Backdrop>
  );

  return (
    <>
      {activator({ setIsOpened })}
      {createPortal(content, document.body)}
    </>
  );
};

export { Modal };
