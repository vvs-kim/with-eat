import { createSlice } from '@reduxjs/toolkit';

export type SearchResultType = {
    id: string;
    address: string;
    tel: string;
    category: string[];
    context: string[];
    menuInfo: string;
    thumUrl: string;
    x: string;
    y: string;
};

export type SearchSliceType = {
    searchResult: SearchResultType[];
};

export const searchSlice = createSlice({
    name: 'searchSlice',
    initialState: {
        searchResult: [],
    },
    reducers: {
        addSearchResult: (state, action) => {
            state.searchResult = state.searchResult.concat(action.payload);
        },
    },
});

export const { addSearchResult } = searchSlice.actions;