import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {choesePtoduct, minusQuantityProd, setTotal} from '../../store/slices/productSlice'
import './styles.scss'

const ProductItem = ({ img, name, price, quantity, id }) => {
  const insertedMoney = useSelector((state) => state.productSlice.insertedMoney)
  const dispatch = useDispatch()
  
  const handleChoeseProduct = (name, price, id) => {
    dispatch(choesePtoduct(name))
    dispatch(setTotal(price))
    dispatch(minusQuantityProd(id))
  }

  return (
    <li className="item">
      <img src={img} alt="product-img" />
      <p>{name}</p>
      <p>цена: {price}р.</p>

      {quantity > 0 ? (
        <button
          disabled={price > insertedMoney}
          onClick={() => handleChoeseProduct(name, price, id)}
        >
          выбрать <span>{quantity}</span>
        </button>
      ) : (
        'не осталось'
      )}
    </li>
  )
}

export default ProductItem
