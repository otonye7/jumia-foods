import {createSelector} from 'reselect';

const selectFood = state => state.food;

export const foods = createSelector(
    [selectFood],
    food => food.sections
)