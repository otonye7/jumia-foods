import {createSelector} from 'reselect';

const selectCollection = state => state.collections;

export const collection = createSelector(
    [selectCollection],
    collections => collections.sections
)