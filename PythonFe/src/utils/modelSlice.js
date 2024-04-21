import { createSlice } from "@reduxjs/toolkit";

const modelSlice = createSlice({
    name: 'model',
    initialState: {
        showModel: false,
    },
    reducers: {
        toggleModel: (state, action) => {
            console.log("state",state.showModel);
            state.showModel = !state.showModel;
        }
    }
})

export const { toggleModel } = modelSlice.actions;
export default modelSlice.reducer;