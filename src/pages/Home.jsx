import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import ProductList from '../components/ProductList'
import Control from '../components/Сontrol'
import { fetchProducts } from '../store/slices/productSlice'
import './styles.scss'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return (
    <div className="home">
      <ProductList />
      <Control />
    </div>
  )
}

export default Home
