import { React, useState } from 'react';
import CreateserviceModal from './CreateServcieModal';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';

export default function ServiceButton({ name, barberId }) {
  const [showModal, setShowModal] = useState(false);
  function creatserviceHandler() {
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
      <AddCircleOutlineOutlinedIcon onClick={creatserviceHandler} />
      <span onClick={creatserviceHandler}>Add {name}</span>
      <CreateserviceModal barberId={barberId} name={name} showModal={showModal} handleClose={handleClose} handleOpen={handleOpen} />
    </>
  );
}
