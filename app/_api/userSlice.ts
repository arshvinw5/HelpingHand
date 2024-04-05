import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		user: null,
		isLoading: true,
	},
	reducers: {
		login: (state, action) => {
			state.user = action.payload;
		},
		logout: (state) => {
			state.user = null;
		},
		setLoading: (state, action) => {
			state.isLoading = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { login, logout, setLoading } = userSlice.actions;

//selectors
export const selectUser = (state: any) => state.user.user;
// state => user slice => user variable (null)

export default userSlice.reducer;
