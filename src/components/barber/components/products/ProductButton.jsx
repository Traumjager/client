import { React, useState } from 'react';
import ModalProduct from './ModalProduct';

export default function ProductButton() {
  const [showModal, setShowModal] = useState(false);
  function creatProductHandler() {
    handleOpen();
  }
  const handleOpen = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <>
      <button onClick={creatProductHandler}>create Product</button>
      <ModalProduct showModal={showModal} handleClose={handleClose} handleOpen={handleOpen} />
    </>
  );
}
