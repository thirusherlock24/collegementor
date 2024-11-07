import { createAsyncThunk } from "@reduxjs/toolkit";

// First Thunk for fetching blog landing data
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

// Second Thunk for fetching all blog sections
const fetchAllSections = createAsyncThunk(
  "blogSlice/fetchAllSections",
  async () => {
    try {
      const response = await fetch("https://collegementor.com/api/blogs/allsections");
      if (!response.ok) {
        throw new Error("Failed to fetch all sections");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
);

export { blogThunk, fetchAllSections };
