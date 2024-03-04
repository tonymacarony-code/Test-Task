
import { createSlice } from '@reduxjs/toolkit'
import { RootState } from './store'



// Define a type for the slice state
interface CurrentPage {
    currentPage: number,
}

// Define the initial state using that type
const initialState: CurrentPage = {
    currentPage: 0,
}

export const currentPageSlice = createSlice({
    name: 'currentPage',
    initialState,
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        }
    },
})

export const { setCurrentPage } = currentPageSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCurrentPage = (state: RootState) => state.currentPage.currentPage

export default currentPageSlice.reducer