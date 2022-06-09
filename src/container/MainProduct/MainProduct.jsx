import React from 'react'
import './MainProduct.css'
import TitleStyle from '../../components/TitleStyle/TitleStyle'
import Buttonstyle from '../../components/Buttonstyle/Buttonstyle'
import ProductStyle from '../../components/ProductStyle/ProductStyle'

import { GrStar } from 'react-icons/gr'
import { Link, useParams, Navigate } from 'react-router-dom'

function MainProduct() {
  let params = useParams()
  return (
    <div className="main-product">
      <div className="main-product-title">
        <TitleStyle>
          جزئیات محصول
        </TitleStyle>
      </div>
      <div className="main-product-body container">
        <div className="product-slider">

        </div>
        <div className="product-infos">
          <h4 className="product-title">سانسوریا</h4>
          <div className="product-price">390,000 تومان</div>
          <div className="product-reviews">

            <div className="product-stars">
              <GrStar />
              <GrStar />
              <GrStar />
              <GrStar />
              <GrStar />
            </div>
            (10 مرور)
          </div>
          <div className="product-des">
            <p>گیاه سانسوریا جزو زیباترین و در عین حال مقاوم ترین نوع گیاهان آپارتمانی محسوب میشود و شما عزیزان هم اکنون میتوانید این گیاه را از سایت پرونیا تهیه کنید.</p>
          </div>
          <div className="product-actions">
            <div className="control-product-count">
              <div className="product-plus">+</div>
              <div className="product-count">1</div>
              <div className="product-minus">-</div>
            </div>
            <Buttonstyle>
              افزودن به سبد خرید
            </Buttonstyle>
          </div>
        </div>
      </div>
      <div className="related-products container">
        <TitleStyle>
          محصولات مشابه
        </TitleStyle>
        <div className="related-products-list">
          <ProductStyle />
          <ProductStyle />
          <ProductStyle />
          <ProductStyle />
        </div>
      </div>
    </div>
  )
}

export default MainProduct