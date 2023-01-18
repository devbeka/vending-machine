import React from 'react'
import { useSelector } from 'react-redux'
import ProductItem from '../ProductItem'
import './styles.scss'

const ProductList = () => {
  const { products, status, error } = useSelector((state) => state.productSlice)

  return (
    <ul className="list">
      {status === 'loading' && <h1>Loaging...</h1>}
      {error && <h1>An error occured: {error}</h1>}

      {products.map((product) => (
        <ProductItem {...product} key={product.id} />
      ))}
    </ul>
  )
}

export default ProductList
