import CartActionTypes from "../cart/cart.types";

const INITIAL_STATE = {
    sections: [{
                
        title: 'FanMilk',
        imageUrl: 'https://2.bp.blogspot.com/-BGEtnkUtolU/WRtd9bt8AKI/AAAAAAAAATc/yFFHMmDXU78PsKMHy_aKk1T5r9k1fxu_QCLcB/s1600/Fan%2BMilk%2BPlc.png',
        id: 1,
        rating: 4.5,
        side: 'Healthy.food',
        linkUrl: '/fanmilk',
        price: 15
    },
    {
        title: 'GH Halal',
        imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/15/dc/48/f3/gh-corner-surabaya-restoran.jpg',
        id: 2,
        rating: 4.5,
        side: 'supermarket',
        linkUrl: '/halal',
        price: 10
    }
]
};

const supermarketReducer = (state = INITIAL_STATE, action) => {
    switch(CartActionTypes.type) {
        default:
            return state
    }
};

export default supermarketReducer;