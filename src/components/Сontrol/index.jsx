import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setInsertedMoney } from '../../store/slices/productSlice'
import GiveChange from '../GiveChange'
import './styles.scss'

const Control = () => {
  const { insertedMoney, choesedProducts } = useSelector((state) => state.productSlice)
  const dispatch = useDispatch()

  const handleMoneyInsert = (amount) => {
    dispatch(setInsertedMoney(amount))
  }

  return (
    <div className="control">
      <div className="control__content">
        <h2 className="total">вставленные деньги: {insertedMoney} р.</h2>
        <h2>вставить деньги</h2>
        <button onClick={() => handleMoneyInsert(50)}>50 р.</button>
        <button onClick={() => handleMoneyInsert(100)}>100 р.</button>
        <button onClick={() => handleMoneyInsert(500)}>500 р.</button>
        <button onClick={() => handleMoneyInsert(1000)}>1000 р.</button>

        <p className="choesed-prod">
          выбранные:
          {choesedProducts.length ? `${choesedProducts}` : ' ничего не выбрано'}
        </p>

        <GiveChange />
      </div>
    </div>
  )
}

export default Control
