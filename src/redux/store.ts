import { configureStore } from '@reduxjs/toolkit'
import problemFilterSlice from './problemFilterSlice'

export const store = configureStore({
  reducer: {
    problemFilters: problemFilterSlice,
  },
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
