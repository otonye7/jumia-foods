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
        title: 'Jumia Party (DRINKS)',
        imageUrl: 'https://yummy.co.ke/wp-content/uploads/2019/09/IMG-20190927-WA0003-1-e1569578538105-1024x724.jpg',
        id: 5,
        rating: 4.6,
        side: 'heineken.coke.fanta.sprite',
        linkUrl: '/jumia-drinks',
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
        title: 'BARCELOS (JUNCTION MALL)',
        imageUrl: 'https://beautifulghana.com/wp-content/uploads/2020/04/Barcelos5-2-1200x1018.jpg',
        id: 8,
        rating: 4.9,
        side: 'Burger.fastfood.healthyfood',
        linkUrl: '/barcelos',
        price: 130
    },
    {
        title: 'Jerk King (Junction Mall)',
        imageUrl: 'https://i.pinimg.com/originals/12/b3/83/12b38376d18ccae9e4727fec880b5a94.jpg',
        id: 9,
        rating: 4.0,
        side: 'Chicken.Meat',
        linkUrl: '/jerk-king',
        price: 130
    },
    {
        title: 'Chicken Republic (Spintex Road)',
        imageUrl: 'https://beautifulghana.com/wp-content/uploads/2020/04/ChickenRepublic_FoodPagesBanner-scaleds-1-1196x826.jpg',
        id: 10,
        rating: 4.5,
        side: 'Chicken.rice.burger',
        linkUrl: '/chicken-republic',
        price: 130
    },
    {
        title: 'Papas Pizza (Spintex)',
        imageUrl: 'https://beautifulghana.com/wp-content/uploads/2020/04/Papas-Pizza-1-520x397.jpg',
        id: 11,
        rating: 4.8,
        side: 'Pizza.Meat.Chicken',
        linkUrl: '/papas-pizza',
        price: 130
    },
    {
        title: 'Formosa Restaurant (Sakumono)',
        imageUrl: 'https://www.californiahomedesign.com/wp-content/uploads/2019/08/FormosaCafe__TableDishes1_credit-MaximShapovalov-1024x682.jpg',
        id: 12,
        rating: 4.7,
        side: 'rice.chicken.turkey.pizza',
        linkUrl: '/formosa-resturant',
        price: 130
    },
    {
        title: 'Cheezzy Pizza (Spintex)',
        imageUrl: 'https://www.myconfinedspace.com/wp-content/uploads/2009/12/cheesy-pizza-500x405.jpg',
        id: 13,
        rating: 4.6,
        side: 'pizza.chicken.meat.carrot',
        linkUrl: '/chicken-pizza',
        price: 130
    },
    {
        title: 'Griddle Kitchen',
        imageUrl: 'https://www.pyleaudio.com/1000/PKGRIL45.jpg',
        id: 14,
        rating: 4.8,
        side: 'chicken.burger.meat.pizza',
        linkUrl: '/griddle-kitchen',
        price: 130
    },
    {
        title: 'Pizza Inn (Junction Mall)',
        imageUrl: 'https://beautifulghana.com/wp-content/uploads/2020/06/58420047_1091026654415951_1476174375530004480_o.jpg',
        id: 15,
        rating: 5.0,
        side: 'chicken.meant',
        linkUrl: '/pizza-inn',
        price: 130
    },
    {
        title: 'Eno Serwaa Restaurant',
        imageUrl: 'https://d1t295ks1d26ah.cloudfront.net/media/pictures/files/000/020/341/xlarge_desktop/84026282_2886973601353134_8665365453352206336_o.jpg?1588370068',
        id: 16,
        rating: 4.8,
        side: 'rice.beef',
        linkUrl: '/eno-serwaa',
        price: 130
    },
    {
        title: 'Vida E Cafe (Junction Mall)',
        imageUrl: 'https://i.pinimg.com/originals/1b/f6/b2/1bf6b208228b8f32a89329f6d7cd9dcd.jpg',
        id: 17,
        rating: 4.8,
        side: 'rice.chicken.drinks.beverages',
        linkUrl: '/vida-e-cafe',
        price: 130
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