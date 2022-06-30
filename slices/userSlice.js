import { createSlice } from '@reduxjs/toolkit';
import { cards } from '../objects';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        profile: null,
        card: null,
        cardList: cards,
    },
    reducers: {
        change: (state, action) => {
            state.user = action.payload;
        },
        changeProfile: (state, action) => {
            state.profile = action.payload;
        },
        changeCard: (state, action) => {
            state.card = action.payload;
        },
        changeCardList: (state, action) => {
            state.cardList = action.payload;
        }
    },
});

export const { change, changeProfile, changeCard, changeCardList } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectProfile = (state) => state.user.profile;
export const selectCard = (state) => state.user.card;
export const selectCardList = (state) => state.user.cardList;

export default userSlice.reducer;