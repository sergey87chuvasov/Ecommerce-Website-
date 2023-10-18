import React from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';

const ProductDisplay = (props) => {
  const { product } = props;
  return (
    <div className='productdisplay'>
      <div className='productdisplay-left'>
        <div className='productdisplay-img-list'>
          <img src={product.image} alt='product pic' />
          <img src={product.image} alt='product pic' />
          <img src={product.image} alt='product pic' />
          <img src={product.image} alt='product pic' />
        </div>
        <div className='productdisplay-img'>
          <img
            className='productdisplay-main-img'
            src={product.image}
            alt='product pic'
          />
        </div>
      </div>
      <div className='productdisplay-right'>
        <h1>{product.name}</h1>
        <div className='productdisplay-right-star'>
          <img src={star_icon} alt='star pic' />
          <img src={star_icon} alt='star pic' />
          <img src={star_icon} alt='star pic' />
          <img src={star_icon} alt='star pic' />
          <img src={star_dull_icon} alt='star pic' />
          <p>(122)</p>
        </div>
        <div className='productdisplay-right-prices'>
          <div className='productdisplay-right-price-old'>
            ${product.old_price}
          </div>
          <div className='productdisplay-right-price-new'>
            ${product.new_price}
          </div>
          <div className='productdisplay-right-description'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
            accusantium debitis id reiciendis ab veniam suscipit consequuntur
            exercitationem? Eum dolorum dolores nihil rem accusamus impedit
            tenetur itaque a odio quibusdam?
          </div>
          <div className='productdisplay-right-size'>
            <h1>Select Size</h1>
            <div className='productdisplay-right-size'>
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
              <div>XXL</div>
            </div>
            <button>ADD TO CART</button>
            <p className='productdisplay-right-category'>
              <span>Category:</span>Woman, T-Shirt, Crop Top
            </p>
            <p className='productdisplay-right-category'>
              <span>Tags:</span>Modern, Latest
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
