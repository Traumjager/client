import { React, useEffect, useState } from "react";
import { AddShoppingCart, Edit, VisibilityOffSharp } from "@material-ui/icons/";
import Button from "@material-ui/core/Button";
import AddProduct from "../../products/ProductButton";
import styles from "../../../styles/products.module.scss";
import instance, { url } from "../../../../../API/axios";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAction } from "../../../../../store/actions";
import DeleteForever from "@material-ui/icons/DeleteForever";
import UpdateProductModal from "../../products/UpdateProductModal";
import { useParams } from "react-router";


function Products() {


  const dispatch = useDispatch();
  const state = useSelector((state) => state.productsReducer);
  const [barberProducts, setBarberProducts] = useState([]);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [product, setProduct] = useState({});

  const role = useSelector((state) => state?.authReducer?.role);
  const isloggedIn = useSelector((state) => state?.authReducer?.isLoggedIn);
  const userId = useSelector((state) => state?.authReducer?.user?.id);
  let { id } = useParams();

  // get barber products from API
  async function fetchProducts() {
    const response = await instance.get(`/barber/products/0/${id}`);

    console.log(response.data,'api test')

    dispatch(getProductsAction(response.data));
    setBarberProducts(state.barberProducts);
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
    const response = await instance.delete(
      `/barber/products/${product.id}/${product.barber_id}`
    );
    fetchProducts(); // ehhh daaaahhh
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
      formData.append(
        "productImg",
        productData.productImg ? productData.productImg : product.product_image
      );

      formData.append("barberID", 1);
      formData.append(
        "productName",
        productData.productName ? productData.productName : product.product_name
      );
      formData.append(
        "productPrice",
        productData.productPrice ? productData.productPrice : product.price
      );
      formData.append(
        "productDescrp",
        productData.productDescrp
          ? productData.productDescrp
          : product.description
      );
      formData.append(
        "discount",
        productData.discount ? productData.discount : product.discount
      );
      formData.append(
        "endDate",
        productData.endDate ? productData.endDate : product.end_date
      );
      const response = await instance.put(
        `/barber/products/${product.id}/1`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      fetchProducts();

      handleClose();
    } catch (e) {
      console.log("update Product Error", e.message);
    }
  }

  function addToCart(id) {
    // console.log(id);
  }
  function preview(id) {
    // console.log(id);
  }
  const barberIds = Number(id);
  return (
    <div className={styles.container}>
      <h2>
        Products <span>{barberProducts.length} Product</span>
      </h2>

      {role === "barber" && userId === barberIds && isloggedIn && (
        <div className={styles.productButton}>
          <AddProduct name="Product" />
        </div>
      )}

      <div className={styles.allCard}>
        {barberProducts.map((pro) => (
          <div className={styles.card} key={pro.id}>
            <div className={styles.innerCard}>
              <div>
                <img
                  src={`${url}${pro.product_image}`}
                  alt={pro.product_name}
                />
              </div>

              <div>
                <Button
                  onClick={() => deleteProductHandler(pro)}
                  style={{ color: "#a38350" }}
                  size="small"
                >
                  <DeleteForever className={styles.icon} />
                </Button>
                <Button
                  onClick={() => handleOpen(pro)}
                  style={{ color: "#a38350" }}
                  size="small"
                >
                  <Edit className={styles.icon} />
                </Button>
                <Button
                  onClick={() => addToCart(pro.id)}
                  style={{ color: "#a38350", borderRight: "1px solid" }}
                  size="small"
                >
                  <AddShoppingCart className={styles.icon} />
                </Button>

                <Button
                  onClick={() => preview(pro.id)}
                  style={{ color: "#a38350" }}
                  size="small"
                >
                  <VisibilityOffSharp className={styles.icon} />
                </Button>
              </div>
            </div>

            <div className={styles.text}>
              <p>{pro.price} JD</p>
              <p>{pro.product_name}</p>
              <p> Description: {pro.description} </p>
              <p>discount: {pro.discount}</p>
              <p>end date discount: {pro.end_date}</p>
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
