import React from 'react';
import './CSS/ShopCategory.css';
import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img src={props.banner} alt='banners pic' />
    </div>
  );
};

export default ShopCategory;
