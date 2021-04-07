import {createSelector} from 'reselect';

const selectWine = state => state.wine;

export const wines = createSelector(
    [selectWine],
    wine => wine.sections
)