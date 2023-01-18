import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  products: [],
  choesedProducts: [],
  insertedMoney: 0,
  status: null,
  error: null,
}

export const fetchProducts = createAsyncThunk(
  'product/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://localhost:8080/products')
      return response.data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const productSlice = createSlice({
  initialState,
  name: 'product',
  reducers: {
    setInsertedMoney: (state, action) => {
      state.insertedMoney = state.insertedMoney + action.payload
    },
    setTotal: (state, action) => {
      state.insertedMoney = state.insertedMoney - action.payload
    },
    choesePtoduct: (state, action) => {
      state.choesedProducts.push(action.payload)
    },
    clearInsertedMoney: (state) => {
      state.insertedMoney = 0
    },
    minusQuantityProd: (state, action) => {
      const prod = state.products.find((prod) => prod.id === action.payload)
      prod.quantity -= 1
    },
  },
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.status = 'loading'
      state.error = null
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.status = 'resolved'
      state.products = action.payload
    },
    [fetchProducts.rejected]: (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
    },
  },
})

export const {
  setInsertedMoney,
  choesePtoduct,
  setTotal,
  clearInsertedMoney,
  minusQuantityProd,
} = productSlice.actions

export default productSlice.reducer
