import { configureStore } from '@reduxjs/toolkit'
import productosSlice from './slices/productosSlice'
import usuarioSlice from './slices/usuarioSlice'

export default configureStore({
  reducer: {
    user: usuarioSlice, 
    product: productosSlice,
  }
})