import React,{useState,useEffect} from 'react'
import './Products.css'
import {FaThList} from 'react-icons/fa'
import {CgMenuGridR} from 'react-icons/cg'
import TitleStyle from '../../components/TitleStyle/TitleStyle'
import Sidebar from '../../components/Sidebar/Sidebar'
import ProductStyle from '../../components/ProductStyle/ProductStyle'
import axios from 'axios'

function Products() {
  const [products,setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://shopping-website-project-8486a-default-rtdb.firebaseio.com/products.json')
      setProducts(result.data);
    }
    fetchData()
  },[])
  return (
    <div className="products">
      <div className="products-title">
        <TitleStyle>فروشگاه</TitleStyle>
      </div>
      <div className="products-body container">
        <Sidebar />
        <div className="products-inner">
          <div className="products-controls">
            <div className="number-of-products">
              9 محصول از 30 تا
            </div>
            <div className="show-products-Horizontal">
              <CgMenuGridR />
            </div>
            <div className="show-products-vertical">
              <FaThList />
            </div>
            <div className="sort-products">
              مرتب سازی به صورت پیش فرض
            </div>
          </div>
          <div className="products-list">
            {
              products.map(product => (
                <ProductStyle {...product} key={product.id}/>
              ))
            }
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products