import { createSlice } from "@reduxjs/toolkit";
export const authSlice = createSlice({
	name: "auth",
	initialState: {
        authState:{},
		userarray:{}
	},
	reducers: {
	
        authInfo: (state, action) => {
			state.authState = action.payload;
		
		},
		addUser: (state, action) => {
			state.userarray = action.payload;
		
		},
		
	},
});
export const { authInfo,addUser } = authSlice.actions;

export default authSlice.reducer;