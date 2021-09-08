import { React, useEffect, useState } from 'react';
import { AddShoppingCart, Edit, VisibilityOffSharp } from '@material-ui/icons/';
import Button from '@material-ui/core/Button';
import AddProduct from '../../products/ProductButton';
import styles from '../../../styles/products.module.scss';
import instance, { url } from '../../../../../API/axios';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsAction } from '../../../../../store/actions';
import DeleteForever from '@material-ui/icons/DeleteForever';
import UpdateProductModal from '../../products/UpdateProductModal';
const products = [
  {
    id: 0,
    name: 'product0',
    price: 5,
    url: 'https://cdn.shopify.com/s/files/1/0114/0994/8731/products/product-14_6be0fb17-698b-4356-832f-5c8873a277af_large.png?v=1540200354',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. In dolorem ducimus quisquam deserunt dolore ipsa laudantium necessitatibus, doloribus esse, earum accusantium maxime recusandae similique, rerum sit. Inventore error molestiae dicta.',
  },
  {
    id: 1,
    name: 'product1',
    price: 7,
    url: 'https://cdn.shopify.com/s/files/1/0114/0994/8731/products/product-02_d979a77b-ff52-4548-8861-428f2306d3cb_large.png?v=1540200823',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. In dolorem ducimus quisquam deserunt dolore ipsa laudantium necessitatibus, doloribus esse, earum accusantium maxime recusandae similique, rerum sit. Inventore error molestiae dicta.',
  },
  {
    id: 2,
    name: 'product2',
    price: 11,
    url: 'https://cdn.shopify.com/s/files/1/0114/0994/8731/products/product-09_7cd13001-bfc2-4a9c-b8fc-dfd07a322eab_large.png?v=1540200200',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. In dolorem ducimus quisquam deserunt dolore ipsa laudantium necessitatibus, doloribus esse, earum accusantium maxime recusandae similique, rerum sit. Inventore error molestiae dicta.',
  },
  {
    id: 3,
    name: 'product3',
    price: 20,
    url: 'https://cdn.shopify.com/s/files/1/0114/0994/8731/products/product-14_6be0fb17-698b-4356-832f-5c8873a277af_large.png?v=1540200354',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. In dolorem ducimus quisquam deserunt dolore ipsa laudantium necessitatibus, doloribus esse, earum accusantium maxime recusandae similique, rerum sit. Inventore error molestiae dicta.',
  },
  {
    id: 4,
    name: 'product4',
    price: 1,
    url: 'https://cdn.shopify.com/s/files/1/0114/0994/8731/products/product-04_12cec818-5bcb-4bfd-901f-c390d3551d35_large.png?v=1540199963',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. In dolorem ducimus quisquam deserunt dolore ipsa laudantium necessitatibus, doloribus esse, earum accusantium maxime recusandae similique, rerum sit. Inventore error molestiae dicta.',
  },
];

function Products() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.productsReducer);
  const state2 = useSelector((state) => state.authReducer);
  let barberId = state2?.user?.id ? state2?.user?.id : 27;
  const [barberProducts, setBarberProducts] = useState([]);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [product, setProduct] = useState({});

  // get barber products from API
  async function fetchProducts() {
    const response = await instance.get(`/barber/products/0/${barberId}`);
    console.log('response.data', response.data);
    dispatch(getProductsAction(response.data));
    console.log('state', state);
    setBarberProducts(state.barberProducts);
    console.log('barberProducts', barberProducts);
  }
  // did mount
  useEffect(() => {
    fetchProducts();
  }, []);

  //did update on global state products
  useEffect(() => {
    setBarberProducts(state.barberProducts);
  }, [state.barberProducts]);

  // delete Product Handler
  async function deleteProductHandler(product) {
    // '/products/:productID/:barberID'
    const response = await instance.delete(`/barber/products/${product.id}/${product.barber_id}`);
    fetchProducts();
  }

  const handleOpen = (pro) => {
    setShowUpdateForm(true);
    setProduct(pro);
  };

  const handleClose = () => {
    setShowUpdateForm(false);
  };

  // on submmit update product form
  async function onSubmitUpdate(e, product, productData) {
    try {
      e.preventDefault();
      // setProductData({ ...productData, barberID: 1 });
      let formData = new FormData();
      formData.append('productImg', productData.productImg ? productData.productImg : product.product_image);

      formData.append('barberID', 1);
      formData.append('productName', productData.productName ? productData.productName : product.product_name);
      formData.append('productPrice', productData.productPrice ? productData.productPrice : product.price);
      formData.append('productDescrp', productData.productDescrp ? productData.productDescrp : product.description);
      formData.append('discount', productData.discount ? productData.discount : product.discount);
      formData.append('endDate', productData.endDate ? productData.endDate : product.end_date);
      const response = await instance.put(`/barber/products/${product.id}/1`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      fetchProducts();

      handleClose();
    } catch (e) {
      console.log('update Product Error', e.message);
    }
  }

  function addToCart(id) {
    console.log(id);
  }
  function preview(id) {
    console.log(id);
  }

  return (
    <div className={styles.container}>
      <h2>
        Products <span>{barberProducts.length} Product</span>
      </h2>

      <div className={styles.productButton}>
        <AddProduct name="Product" />
      </div>

      <div className={styles.allCard}>
        {products?.map((pro) => (
          <div className={styles.card} key={pro.id}>
            <div className={styles.innerCard}>
              {/* <div>
                <img src={`${url}${pro.product_image}`} alt={pro.product_name} />
              </div> */}
              <div className={styles.image}>
                <img src={`${pro.url}`} alt={pro.product_name} />
              </div>

              <div className={styles.hidden}>
                <Button onClick={() => deleteProductHandler(pro)} style={{ color: '#a38350' }} size="small">
                  <DeleteForever className={styles.icon} />
                </Button>

                <Button onClick={() => handleOpen(pro)} style={{ color: '#a38350' }} size="small">
                  <Edit className={styles.icon} />
                </Button>

                {/* <Button onClick={() => addToCart(pro.id)} style={{ color: '#a38350' }} size="small">
                  <AddShoppingCart className={styles.icon} />
                </Button> */}

                <Button onClick={() => preview(pro.id)} style={{ color: '#a38350' }} size="small">
                  <VisibilityOffSharp className={styles.icon} />
                </Button>
              </div>
            </div>

            <div className={styles.text}>
              <p>{pro.price} JD</p>
              {/* <p>{pro.product_name}</p> */}
              <p>{pro.name}</p>
              {/* <p> Description: {pro.description} </p> */}
              {/* <p>discount: {pro.discount}</p>
              <p>end date discount: {pro.end_date}</p> */}
              {/* rating */}
            </div>
          </div>
        ))}
        {showUpdateForm && (
          <UpdateProductModal
            showUpdateForm={showUpdateForm}
            handleClose={handleClose}
            onSubmitUpdate={onSubmitUpdate}
            pro={product}
          />
        )}
      </div>
    </div>
  );
}
export default Products;
