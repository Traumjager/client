import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import instance, { url } from '../../../../../../API/axios';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import css from './productModal.module.scss';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(0),
  },
}));

function ProductModal({ prod, open, handleClose }) {
  const classes = useStyles();

  return (
    <div className={css.container}>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <section className={css.product}>
              <div className={css.productPhoto}>
                <div className={css.photoContainer}>
                  <div className={css.photoMain}>
                    <div className={css.controls}>
                      <i className={css.materialIcons}>share</i>
                      <i className={css.materialIcons}>favorite_border</i>
                    </div>
                    <img src={`${url}${prod.product_image}`} alt={prod.product_name} />
                  </div>
                </div>
              </div>
              <div className={css.productInfo}>
                <div className={css.title}>
                  <h1>{prod.product_name}</h1>
                </div>
                <div className={css.price}>
                  JD <span>{prod.price}</span>
                </div>

                <div className={css.description}>
                  <h3>Description</h3>
                  <p>{prod.description}</p>
                </div>
                <div className={css.buyBtn}>
                  <AddShoppingCartIcon /> Add to Cart
                </div>
              </div>
            </section>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default ProductModal;

// prod.product_name
// prod.product_image
// prod.price
// prod.description
// prod.discount
// prod.end_date
