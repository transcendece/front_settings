import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../Slices/userSlice'
import chatReducer from '../Slices/chatSlice'
import channelReducer from '../Slices/channelSlice'

const store = configureStore({
    reducer: {
        user: userReducer,
        chat: chatReducer,
        channel: channelReducer,

    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
