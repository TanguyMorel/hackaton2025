import {createSlice} from "@reduxjs/toolkit";

const tweetSlice = createSlice({
    name: 'tweet',
    initialState: {
        value: []
    },
    reducers: {
        setTweet: (state, payload) => {
            state.value = payload.payload;
        },
        modifyTweet: (state, payload) => {
            state.value = state.value.map(x => x._id === payload.payload._id ? {...x, ...payload.payload} : x);
        },
        addNewTweet: (state, payload) => {
            state.value = [payload.payload, ...state.value];
        }
    }
})

export const {setTweet, modifyTweet, addNewTweet} = tweetSlice.actions
export default tweetSlice.reducer;
