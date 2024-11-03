import { configureStore } from '@reduxjs/toolkit';
import blogSlice from './slices/blogSlice'; 

const rootReducer = {
  blog: blogSlice,
};

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
