import { createSlice } from "@reduxjs/toolkit";
import { en } from "../assets/Resources/English";
import { ar } from "../assets/Resources/Arabic";
export const localizationSlice = createSlice({
	name: "localization",
	initialState: {
		currentLocal: en,
	},
	reducers: {
		changeLocal: (state, action) => {
			state.currentLocal = action.payload === "en" ? en : ar;
		
		},
	},
});
export const { changeLocal } = localizationSlice.actions;

export default localizationSlice.reducer;