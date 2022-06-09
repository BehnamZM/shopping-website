import React from 'react'
import './ProductStyle.css'
import { GrStar } from 'react-icons/gr'
import { GiShoppingCart } from 'react-icons/gi'
import { AiOutlineHeart } from 'react-icons/ai'
import { RiSearchEyeLine } from 'react-icons/ri'

function ProductStyle(props) {
  return (
    <>
      <div className="product">
        <div className="product-inner">
          <div className="product-img">
            <img src={props.image} alt="product" />
            <div className="product-controls">
              <div className="add-to-cart product-control-icon">
                <GiShoppingCart />
              </div>
              <div className="show-product-details product-control-icon">
                <RiSearchEyeLine />
              </div>
              <div className="add-to-wishlist product-control-icon">
                <AiOutlineHeart />
              </div>
            </div>
          </div>
          <h4 className="product-title">{props.title}</h4>
          <div className="product-price">{props.price} تومان</div>
          <div className="product-rating-and-stock">
            {
              props.countInStock > 0 ? 
              <p className="Available-in-stock" style={{color:'green'}}>موجود در انبار</p> :
              <p className="Available-in-stock" style={{color:'red'}}>ناموجود</p>
            }
            
            <div className="product-rating">
              <GrStar className="product-rating-icon" />
              <p>{props.rating}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductStyle