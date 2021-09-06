import React from 'react';
import { AddShoppingCart, VisibilityOffSharp } from '@material-ui/icons/';
import Button from '@material-ui/core/Button';
import styles from '../../../styles/products.module.scss';

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
  function addToCart(id) {
    console.log(id);
  }
  function preview(id) {
    console.log(id);
  }

  return (
    <div className={styles.container}>
      <h2>
        Products <span>{products.length} Product</span>
      </h2>
      <div className={styles.allCard}>
        {products.map((pro) => (
          <div className={styles.card} key={pro.id}>
            <div className={styles.innerCard}>
              <div>
                <img src={pro.url} alt={pro.name} />
              </div>

              <div>
                <Button
                  onClick={() => addToCart(pro.id)}
                  style={{ color: '#a38350', borderRight: '1px solid' }}
                  size="small"
                >
                  <AddShoppingCart className={styles.icon} />
                </Button>

                <Button onClick={() => preview(pro.id)} style={{ color: '#a38350' }} size="small">
                  <VisibilityOffSharp className={styles.icon} />
                </Button>
              </div>
            </div>

            <div className={styles.text}>
              <p>{pro.price} JD</p>
              <p>{pro.name}</p>
              {/* rating */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
