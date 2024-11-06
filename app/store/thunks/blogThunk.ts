import { createAsyncThunk } from "@reduxjs/toolkit";

 const blogThunk = createAsyncThunk(
  "blogSlice/fetchLandingData",
  async () => {
    try {
      const response = await fetch("https://mentormenteedev.com/api/blogs/blogsandnews");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
);
export default blogThunk;
