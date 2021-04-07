import CartActionTypes from "../cart/cart.types";

const INITIAL_STATE = {
    sections: [{
                
        title: 'COGNAC & BRANDY',
        imageUrl: 'https://www2.shanghai9.com/media/catalog/product/cache/1/image/c067b99fa85d58571b23096d27427518/h/e/hennessy_xo_cognac_brandy_4.jpg',
        id: 1,
        rating: 4.5,
        side: 'Cognac',
        linkUrl: '/cognac-&-brandy',
        price: 15
    },
    {
        title: 'Vodka',
        imageUrl: 'https://mma.prnewswire.com/media/1084918/Corby_Spirit_and_Wine_Communications_Absolut_vodka_launches_Abso.jpg?p=publish&w=950',
        id: 2,
        rating: 4.5,
        side: 'vodka',
        linkUrl: '/vodka',
        price: 10
    },
    {
        title: 'Blended Whisky',
        imageUrl: 'https://cdn.hiconsumption.com/wp-content/uploads/2017/02/Best-Blended-Scotch.jpg',
        id: 3,
        rating: 4.7,
        side: 'Whiskey',
        linkUrl: '/blended-whisky',
        price: 19
    },
    {
        title: 'American Whisky',
        imageUrl: 'https://www.nuggetmarket.com/media/images/03/03/american-whiskey-horiz.jpg',
        id: 4,
        rating: 4.5,
        side: 'American',
        linkUrl: '/american-whisky',
        price: 8
    },
    {
        title: 'Samo Party (DRINKS)',
        imageUrl: 'https://yummy.co.ke/wp-content/uploads/2019/09/IMG-20190927-WA0003-1-e1569578538105-1024x724.jpg',
        id: 5,
        rating: 4.6,
        side: 'heineken.coke.fanta.sprite',
        linkUrl: '/jumia-drinks',
        price: 130
    },
    {
        title: 'Single Malt Whisky',
        imageUrl: 'https://corporategift.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/g/l/glenfiddich_18-year-old_single_malt_scotch_whisky_2.jpg',
        id: 6,
        rating: 4.9,
        side: 'malt',
        linkUrl: '/single-malt-whisky',
        price: 130
    },
    {
        title: 'Rum',
        imageUrl: 'http://www.drinkhacker.com/wp-content/uploads/2009/12/Plantation-Rum-Barbados-5-year-old.jpg',
        id: 7,
        rating: 4.5,
        side: 'Rum',
        linkUrl: '/rum',
        price: 10
    },
    {
        title: 'Gin',
        imageUrl: 'https://cdn.notonthehighstreet.com/fs/c1/9a/e970-8303-4a08-8b0b-9546a5d7c954/original_shortcross-gin-rademon-estate-distillery.jpg',
        id: 8,
        rating: 4.9,
        side: 'gin',
        linkUrl: '/gin',
        price: 130
    },
    {
        title: 'Tequila & Liqueur',
        imageUrl: 'https://www.bestdrink.cz/2006-tm_thickbox_default/tequila-rose-liqueur-07-l.jpg',
        id: 9,
        rating: 4.0,
        side: 'Tequila',
        linkUrl: '/tequila-&-liqueur',
        price: 130
    },
    {
        title: 'Dry Red Wine',
        imageUrl: 'https://netstorage-briefly.akamaized.net/images/365cc97ec8c7b442.jpg?imwidth=900',
        id: 10,
        rating: 4.5,
        side: 'Dry.Red.Wine',
        linkUrl: '/dry-red-wine',
        price: 130
    },
    {
        title: 'Dry White Wine',
        imageUrl: 'https://terramoldova.eu/136-large_default/purcari-vinohora-dry-white.jpg',
        id: 11,
        rating: 4.8,
        side: 'Dry.White.Wine',
        linkUrl: '/dry-white-wine',
        price: 130
    },
    {
        title: 'Champagne',
        imageUrl: 'https://ksassets.timeincuk.net/wp/uploads/sites/46/2017/07/moet-champagne.jpg',
        id: 12,
        rating: 4.7,
        side: 'champagne',
        linkUrl: '/champagne',
        price: 130
    },
    {
        title: 'Beers',
        imageUrl: 'https://www.anchorglass.com/wp-content/uploads/2018/04/bucket-of-different-beers.jpg',
        id: 13,
        rating: 4.6,
        side: 'berrs',
        linkUrl: '/beers',
        price: 130
    },
    {
        title: 'Soft Drinks',
        imageUrl: 'https://www.delitedashfood.co.za/wp-content/uploads/2018/07/Coolers-powdered-soft-drink-800.png',
        id: 14,
        rating: 4.8,
        side: 'coke',
        linkUrl: '/soft-drinks',
        price: 130
    }
]
};

const wineReducer = (state = INITIAL_STATE, action) => {
    switch(CartActionTypes.type) {
        default:
            return state
    }
};

export default wineReducer;