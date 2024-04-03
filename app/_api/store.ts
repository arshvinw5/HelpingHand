import { configureStore } from '@reduxjs/toolkit';
// import userReducer from './userSlice';
import { rootReducer } from './reducer';

export const store = configureStore({
	// reducer: { user: userReducer },
	reducer: { data: rootReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
