import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearInsertedMoney } from '../../store/slices/productSlice'
import './styles.scss'

const GiveChange = () => {
  const { insertedMoney } = useSelector((state) => state.productSlice)
  const dispatch = useDispatch()

  const [change, setChange] = useState({
    500: 0,
    100: 0,
    50: 0,
    10: 0,
    5: 0,
    1: 0,
  })

  const handleGiveChange = () => {
    let remainingMoney = insertedMoney
    setChange({
      500: Math.floor(remainingMoney / 500),
      100: Math.floor((remainingMoney % 500) / 100),
      50: Math.floor((remainingMoney % 100) / 50),
      10: Math.floor((remainingMoney % 50) / 10),
      5: Math.floor((remainingMoney % 10) / 5),
      1: Math.floor(remainingMoney % 5),
    })
    dispatch(clearInsertedMoney())
  }

  return (
    <div className="change">
      <button onClick={handleGiveChange}>Выдать сдачу</button>
      <div>
        Ваша сдача:
        {change['500'] ? <p>{change['500']}x500 p.</p> : ''}
        {change['100'] ? <p>{change['100']}x100 p.</p> : ''}
        {change['50'] ? <p>{change['50']}x50 p.</p> : ''}
        {change['10'] ? <p>{change['10']}x10 p.</p> : ''}
        {change['5'] ? <p>{change['5']}x5 p.</p> : ''}
        {change['1'] ? <p>{change['1']}x1 p.</p> : ''}
      </div>
    </div>
  )
}

export default GiveChange
