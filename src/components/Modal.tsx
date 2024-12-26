import React from "react";
import type { ReactNode } from "react";

type ModalProps = {
  children: ReactNode;
  onDismiss: () => void;
};

function Modal({ children, onDismiss }: ModalProps) {
  return (
    <div onClick={onDismiss} className="modal">
      {children}
    </div>
  );
}

export default Modal;
