import { configureStore } from '@reduxjs/toolkit'
import  coustemReducer  from './reducer'

export const store = configureStore({
  reducer: {
    custom:coustemReducer,
  },
})