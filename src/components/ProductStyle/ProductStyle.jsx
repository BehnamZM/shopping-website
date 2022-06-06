import React from 'react'
import './ProductStyle.css'
import { GrStar } from 'react-icons/gr'
import { GiShoppingCart } from 'react-icons/gi'
import { AiOutlineHeart } from 'react-icons/ai'
import { RiSearchEyeLine } from 'react-icons/ri'

function ProductStyle() {
  return (
    <>
      <div className="product">
        <div className="product-inner">
          <div className="product-img">
            <img src="/src/assets/3456x2304_20449186-min (2).jpg" alt="product" />
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
          <h4 className="product-title">سانسوریا</h4>
          <div className="product-price">390,000 تومان</div>
          <div className="product-rating-and-stock">
            <p className="Available-in-stock">موجود در انبار</p>

            
            <div className="product-rating">
              <GrStar className="product-rating-icon" />
              <p>4.5</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductStyle