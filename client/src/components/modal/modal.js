import React from 'react';
import './modal.css';

export const Modal = ({active, setActive, children}) => {
  return (
    <div
      className={active ? 'modal active' : 'modal'}
      onClick={() => setActive(false)}>
      <div
        className={active ? 'modal__content active' : 'modal_content'}
        onClick={(e) => e.stopPropagation()}>
        <img
          src="data:image/png;base64,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"
          alt=""
          onClick={() => setActive(false)}
        />
        {children}
      </div>
    </div>
  );
};
