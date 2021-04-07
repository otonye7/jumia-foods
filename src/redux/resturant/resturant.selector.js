import {createSelector} from 'reselect';

const selectResturant = state => state.resturant;

export const resturants = createSelector(
    [selectResturant],
    resturant => resturant.sections
)