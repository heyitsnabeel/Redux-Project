import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:"counter",
    initialState:{counterVal:0},
    reducers:{
        increment:(state)=>{
            state.counterVal++;
        },
        decrement:(state)=>{
            state.counterVal--;
        },
        add:(state,action)=>{
            state.counterVal += Number(action.payload);
        },
        subtract:(state,action)=>{
            state.counterVal -= Number(action.payload);
        }
    }
});

const PrivacySlice = createSlice({
    name:"privacy",
    initialState : false,
    reducers: {
        toggle:(state)=>{
            return state = !state;
        }
    }
})

const counterStore = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        privacy : PrivacySlice.reducer
    }
})

export const counterActions = counterSlice.actions;
export const privacyActions = PrivacySlice.actions;
export default counterStore;