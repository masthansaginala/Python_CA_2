import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userDetails: null
    },
    reducers: {
        addUser: (state, action) => {
            console.log("action", action);
            state.userDetails = action.payload;
        }
    }
})

export const { addUser } = userSlice.actions;
export default userSlice.reducer;