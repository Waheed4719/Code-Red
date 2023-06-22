import { Difficulties, Statuses } from '@/types/filters'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface problemFilterState {
  categories: ''
  difficulty: Difficulties
  status: Statuses
}

const initialState: problemFilterState = {
  categories: '',
  difficulty: '',
  status: '',
}

const problemFilterSlice = createSlice({
  name: 'problemFilters',
  initialState,
  reducers: {
    changeProblemFilters: (
      state,
      action: PayloadAction<Partial<problemFilterState>>
    ) => {
      state = { ...state, ...action.payload }
      return state
    },
  },
})

export const { changeProblemFilters } = problemFilterSlice.actions

export default problemFilterSlice.reducer
