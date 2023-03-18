import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IProject } from '../../pages/homepage/components/ProjectBlock'

interface IProjectState {
  projects: IProject
  themeToogle: boolean
}

const initialState: IProjectState = {
  projects: {
    id: 1,
    title: '',
    images: ['', ''],
    github: 'https://github.com/therehimli/burger-store',
    visit: '',
    stack: '',
    description: '',
  },
  themeToogle: true,
}

export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    addCourse(state, action: PayloadAction<IProject>) {
      state.projects = { ...state.projects, ...action.payload }
    },
    changeToogle(state) {
      state.themeToogle = !state.themeToogle
    },
  },
})

export const { addCourse, changeToogle } = projectSlice.actions

export default projectSlice.reducer
