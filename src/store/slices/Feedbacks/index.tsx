import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {FeedbackService} from "../../../services";
import {FeedbackType} from "../../../models";

const initialState: FeedbackType[] = []

export const getFeedbacks = createAsyncThunk(
    'feedbacks/getFeedbacks',
    async () => {
        try {
            const response = await FeedbackService.getFeedbacks()
            return response.data;
        } catch (err) {
            throw err;
        }
    }
)

export const FeedbacksSlice = createSlice({
    name: 'feedbacks',
    initialState,
    reducers: {
        addFeedback: (state, action: PayloadAction<FeedbackType>) => {
            state.unshift(action.payload)
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getFeedbacks.fulfilled, (state, action: PayloadAction<FeedbackType[]>) => {
            return action.payload;
        })
    },
})

export const { addFeedback } = FeedbacksSlice.actions
export default FeedbacksSlice.reducer;