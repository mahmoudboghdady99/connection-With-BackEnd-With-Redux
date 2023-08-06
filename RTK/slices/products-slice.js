import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


//  الكود المسئول عن جلب الداتا من الباك اند
 export const fetchProducts = createAsyncThunk("productsSlice/fetchProducts", async() => {
  const res = await fetch("http://localhost:1337/api/single-products?populate=*")
  const data = await res.json()
  return data
})


 const productsSlice = createSlice({
  initialState: [],
  name: 'productsSlice',
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload
    })
  }
})

// Action creators are generated for each case reducer function
export const {  } = productsSlice.actions

export default productsSlice.reducer