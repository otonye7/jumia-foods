import CartActionTypes from "../cart/cart.types";

const INITIAL_STATE = {
    sections: [{
                
        title: 'KFC (JUNCTION MALL)',
        imageUrl: 'https://just-eat-prod-sg-res.cloudinary.com/image/upload/c_fill,d_au:cuisines:chicken-0.jpg,f_auto,q_auto,w_500/v1/au/restaurants/11003450.jpg',
        id: 1,
        rating: 4.5,
        side: 'Salad.Chicken',
        linkUrl: '/kfc-mall',
        price: 15
    },
    {
        title: 'KFC (SPINTEX)',
        imageUrl: 'https://just-eat-prod-sg-res.cloudinary.com/image/upload/c_fill,d_au:cuisines:chicken-0.jpg,f_auto,q_auto,w_500/v1/au/restaurants/11003450.jpg',
        id: 2,
        rating: 4.5,
        side: 'Burger.Chicken',
        linkUrl: '/kfc-spintex',
        price: 10
    },
    {
        title: 'Papas Pizza (Spintex)',
        imageUrl: 'https://beautifulghana.com/wp-content/uploads/2020/04/Papas-Pizza-1-520x397.jpg',
        id: 3,
        rating: 4.8,
        side: 'Pizza.Meat.Chicken',
        linkUrl: '/papas-pizza',
        price: 130
    },
    {
        title: 'BARCELOS (JUNCTION MALL)',
        imageUrl: 'https://beautifulghana.com/wp-content/uploads/2020/04/Barcelos5-2-1200x1018.jpg',
        id: 4,
        rating: 4.9,
        side: 'Burger.fastfood.healthyfood',
        linkUrl: '/barcelos',
        price: 130
    },
    {
        title: 'Jerk King (Junction Mall)',
        imageUrl: 'https://i.pinimg.com/originals/12/b3/83/12b38376d18ccae9e4727fec880b5a94.jpg',
        id: 5,
        rating: 4.0,
        side: 'Chicken.Meat',
        linkUrl: '/jerk-king',
        price: 130
    },
    {
        title: 'KFC (JUNCTION MALL)',
        imageUrl: 'https://just-eat-prod-sg-res.cloudinary.com/image/upload/c_fill,d_au:cuisines:chicken-0.jpg,f_auto,q_auto,w_500/v1/au/restaurants/11003450.jpg',
        id: 6,
        rating: 4.9,
        side: 'chicken.burger',
        linkUrl: '/kfc-mall',
        price: 130
    },
    {
        title: 'KFC (SPINTEX)',
        imageUrl: 'https://just-eat-prod-sg-res.cloudinary.com/image/upload/c_fill,d_au:cuisines:chicken-0.jpg,f_auto,q_auto,w_500/v1/au/restaurants/11003450.jpg',
        id: 7,
        rating: 4.5,
        side: 'Burger.Chicken',
        linkUrl: '/kfc-spintex',
        price: 10
    },
    {
        title: 'Chicken Republic (Spintex Road)',
        imageUrl: 'https://beautifulghana.com/wp-content/uploads/2020/04/ChickenRepublic_FoodPagesBanner-scaleds-1-1196x826.jpg',
        id: 8,
        rating: 4.5,
        side: 'Chicken.rice.burger',
        linkUrl: '/chicken-republic',
        price: 130
    },
    {
        title: 'Papas Pizza (Spintex)',
        imageUrl: 'https://beautifulghana.com/wp-content/uploads/2020/04/Papas-Pizza-1-520x397.jpg',
        id: 9,
        rating: 4.8,
        side: 'Pizza.Meat.Chicken',
        linkUrl: '/papas-pizza',
        price: 130
    }
]
};

const foodReducer = (state = INITIAL_STATE, action) => {
    switch(CartActionTypes.type) {
        default:
            return state
    }
};

export default foodReducer;