import React from 'react';
import css from '../styles/media.module.scss';

const media = [
  {
    id: 1,
    name: 'style1',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum nulla nesciunt ut architecto nihil hic cupiditate eligendi ipsam reiciendis incidunt? Quam corporis numquam consequuntur assumenda laborum enim hic natus minus?',
    url: 'https://images-cdn.buyagift.co.uk/common/client/Images/Product/Extralarge/en-GB/10589477_8.jpg',
  },
  {
    id: 2,
    name: 'style2',
    text: 'Lorem quam consequuntur assumenda laborum enim hic natus minus?',
    url: 'https://i.pinimg.com/564x/fb/a1/38/fba138a7bcfbbaa087f57fd6afc97ae8.jpg',
  },
  {
    id: 3,
    name: 'style3',
    // eslint-disable-next-line no-multi-str
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex debitis nesciunt, delectus obcaecati sed, totam nemo eius autem suscipit quod quidem laboriosam est eligendi illum aliquid? Facilis mollitia provident aut!\
    Cumque earum neque dolores veniam libero quis nostrum at, explicabo est? Repellat cupiditate illum eum molestias, numquam illo fuga iure in maxime necessitatibus obcaecati enim dignissimos voluptas voluptate ipsam pariatur!',
    url: 'https://content.latest-hairstyles.com/wp-content/uploads/mens-short-fade-haircuts.jpg',
  },
];

function Media() {
  return (
    <div className={css.container}>
      <h2>Media</h2>
    </div>
  );
}

export default Media;
