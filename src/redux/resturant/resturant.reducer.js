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
        title: 'Chicken Republic (Spintex Road)',
        imageUrl: 'https://beautifulghana.com/wp-content/uploads/2020/04/ChickenRepublic_FoodPagesBanner-scaled-3-1200x726.jpg',
        id: 3,
        rating: 4.7,
        side: 'Burger.Chicken',
        linkUrl: '/chicken-republic-spintex-road',
        price: 19
    },
    {
        title: 'Papas Pizza (Spintex)',
        imageUrl: 'https://netstorage-yen.akamaized.net/images/3o3bpd3c3bd8mc40g.jpg',
        id: 4,
        rating: 4.5,
        side: 'Sandwitches.Chicken',
        linkUrl: '/papas-pizza-spintex',
        price: 8
    },
    {
        title: 'Mens adidas Originals Superstar Shoes White Splatter',
        imageUrl: 'https://i.ebayimg.com/images/g/hE0AAOSwwz9enjeG/s-l300.jpg',
        id: 5,
        color: 'WHITE',
        brands: 'ADIDAS',
        linkUrl: '/mens-adidas-originals-superstar-shoes-white-splatter',
        description: 'A classic through and through. Update your Superstar collection with a fresh pair. The adidas Superstars have a longstanding history and faithful followers that have grown up wearing the iconic kicks. Todays iteration features a heritage style look in a white and artistic splatter colorway. adidas shell-toe sneakers like you ve always loved come with the herringbone outsoles to keep you grounded. Comes in Cloud White with adidas serrated 3-Stripes. The Superstar logo is hit with Gold Metallic. ',
        price: 130
    },
    {
        title: 'Mens New Balance 997H Shoes Team Away Grey',
        imageUrl: 'https://i.pinimg.com/originals/c0/4b/d9/c04bd94681d68fa72599f2fb016950fa.jpg',
        id: 6,
        color: 'GREY',
        brands: 'NEW BALANCE',
        linkUrl: '/mens-new-balance-997h-shoes-team-away-grey',
        description: 'The New Balance 997H draws inspiration from the classic and beloved of brand loyalists 997 that was first released back in 1991. The 997H features GCEVA construction and a modernized outsole for the ultimate lightweight ride. The shoes are built with a combination of suede, mesh, synthetic and leather details. The New Balance shoes are presented in Team Away Grey and Pigment.',
        price: 279
    }
]
};

const resturantReducer = (state = INITIAL_STATE, action) => {
    switch(CartActionTypes.type) {
        default:
            return state
    }
};

export default resturantReducer;