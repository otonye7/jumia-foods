import {createSelector} from 'reselect';

const selectSupermarket = state => state.supermarket;

export const supermarkets = createSelector(
    [selectSupermarket],
    supermarket => supermarket.sections
)