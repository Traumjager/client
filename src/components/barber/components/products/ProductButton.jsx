import { React, useState } from 'react';
import ModalProduct from './ModalProduct';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';

export default function ProductButton({ name }) {
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
      <AddCircleOutlineOutlinedIcon onClick={creatProductHandler} />
      <span onClick={creatProductHandler}>Add {name}</span>
      <ModalProduct name={name} showModal={showModal} handleClose={handleClose} handleOpen={handleOpen} />
    </>
  );
}
