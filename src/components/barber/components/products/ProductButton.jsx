import { React, useState } from 'react';
<<<<<<< HEAD
import CreateProductModal from './CreateProductModal';
=======
import ModalProduct from './ModalProduct';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
>>>>>>> 4277b82531ceb8ee64ac75dce9b4bd478b7487c6

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
<<<<<<< HEAD
      <button onClick={creatProductHandler}>create Product</button>
      <CreateProductModal showModal={showModal} handleClose={handleClose} handleOpen={handleOpen} />
=======
      <AddCircleOutlineOutlinedIcon onClick={creatProductHandler} />
      <span onClick={creatProductHandler}>Add {name}</span>
      <ModalProduct name={name} showModal={showModal} handleClose={handleClose} handleOpen={handleOpen} />
>>>>>>> 4277b82531ceb8ee64ac75dce9b4bd478b7487c6
    </>
  );
}
