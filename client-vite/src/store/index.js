import { configureStore } from '@reduxjs/toolkit';

// Mock slices for demo
const authSlice = {
  name: 'auth',
  initialState: {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null
  },
  reducers: {}
};

const healthProfileSlice = {
  name: 'healthProfile',
  initialState: {
    profiles: [],
    loading: false,
    error: null,
    pagination: {
      currentPage: 1,
      totalPages: 1,
      totalProfiles: 0
    }
  },
  reducers: {}
};

export const store = configureStore({
  reducer: {
    auth: (state = authSlice.initialState, action) => state,
    healthProfile: (state = healthProfileSlice.initialState, action) => state,
  },
});

export default store; 