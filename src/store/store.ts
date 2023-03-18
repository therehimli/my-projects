import { configureStore } from '@reduxjs/toolkit'
import projectSlice from './Slices/CourseSlice'

export const store = configureStore({
  reducer: {
    projects: projectSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
