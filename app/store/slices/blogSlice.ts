// blogSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import  blogThunk  from "../thunks/blogThunk";

// Define the initial state and its type
type HeaderCategoryProps = {
  category: string;
  subCategory: string;
  landingData: any;
  loading: boolean;
  error: string | null;
};

const initialState: HeaderCategoryProps = {
  category: "",
  subCategory: "",
  landingData: null,
  loading: false,
  error: null,
};

// Create the blog slice
const blogSlice = createSlice({
  name: "blogSlice",
  initialState,
  reducers: {
    setCurrentCategoryPageValue: (
      state,
      action: PayloadAction<{ category: string; subCategory: string }>
    ) => {
      state.category = action.payload.category;
      state.subCategory = action.payload.subCategory;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(blogThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(blogThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch blog landing data";
      })
      .addCase(blogThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.landingData = action.payload;
      });
  },
});

// Export the action and reducer
export const { setCurrentCategoryPageValue } = blogSlice.actions;
export default blogSlice.reducer;
