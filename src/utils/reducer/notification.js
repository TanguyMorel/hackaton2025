import {createSlice} from "@reduxjs/toolkit";

const notificationSlice = createSlice({
    name: 'notification',
    initialState: {
        value: []
    },
    reducers: {
        setNotification: (state, payload) => {
            state.value = payload.payload;
        },
        modifyNotification: (state, payload) => {
            state.value = state.value.map(x => x._id === payload.payload._id ? {...x, ...payload.payload} : x);
        },
        addNewNotification: (state, payload) => {
            state.value = [payload.payload, ...state.value];
        }
    }
})

export const {setNotification, modifyNotification, addNewNotification} = notificationSlice.actions
export default notificationSlice.reducer;
