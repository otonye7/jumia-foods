

const INITIAL_STATE = {
    sections: [{
                
        title: 'Kentucky Box with Rice',
        imageUrl: 'https://static.lieferando.de/images/chains/de/kentucky_fried_chicken/products/2020_ricebox-menu.png',
        id: 1,
        pieces: '3 pieces',
        extra: 'Chips',
        drinks: '300ml Drinks',
        price: 15
    },
    {
        title: 'Kentucky Box with Chips',
        imageUrl: 'https://www.findtakeaways.co.za/images/hc_reg.png',
        id: 2,
        pieces: '3 pieces',
        extra: 'Chips',
        drinks: '300ml Drinks',
        price: 10
    },
    {
        title: 'Chicken Rice Bowl',
        imageUrl: 'https://5.imimg.com/data5/MY/GC/GLADMIN-12678009/5-in-1-rice-box-500x500.jpg',
        id: 3,
        pieces: '3 pieces',
        extra: 'Rice',
        drinks: '300ml Drinks',
        price: 15
    },
    {
        title: 'Crunch Burger with Chips',
        imageUrl: 'https://pbs.twimg.com/media/C4mPD1jXAAMsPNq.jpg:large',
        id: 4,
        pieces: '3 pieces',
        extra: 'Chips',
        drinks: '300ml Drinks',
        price: 15
    },
    {
        title: 'Bucket for One',
        imageUrl: 'https://i2.wp.com/www.frugalfeeds.com.au/wp-content/uploads/2019/06/P7_BucketForOne_web_mobile.jpg?fit=676%2C513&ssl=1g',
        id: 5,
        pieces: '3 pieces',
        extra: 'Chips',
        drinks: '300ml Drinks',
        price: 15
    },
    {
        title: 'Streetwise 1 with Regular Chips',
        imageUrl: 'https://res.cloudinary.com/ogwugo-market/image/upload/v1544625400/products/continental_dishies/1544625400_Streetwise-Three-2.jpg',
        id: 6,
        pieces: '3 pieces',
        extra: 'Chips',
        drinks: '300ml Drinks',
        price: 15
    },
    {
        title: 'Streetwise 2 with Regular Chips',
        imageUrl: 'https://res.cloudinary.com/ogwugo-market/image/upload/v1544625400/products/continental_dishies/1544625400_Streetwise-Three-2.jpg',
        id: 7,
        pieces: '3 pieces',
        extra: 'Chips',
        drinks: '300ml Drinks',
        price: 15
    },
    {
        title: 'Streetwise 2 with Rice',
        imageUrl: 'https://www.eziban.com/upload/1525083389-Streetwise-2Pc-HC-Chicken-And-Spicy-Rice_512x405.jpg',
        id: 8,
        pieces: '3 pieces',
        extra: 'Chips',
        drinks: '300ml Drinks',
        price: 15
    },
    {
        title: '1 Piece Chicken',
        imageUrl: 'https://vignette.wikia.nocookie.net/kfc/images/c/c3/Chicken-originalrecipe_1pce.jpg/revision/latest?cb=20160229052734',
        id: 9,
        pieces: '3 pieces',
        extra: 'Chips',
        drinks: '300ml Drinks',
        price: 15
    },
    {
        title: '2 Piece Chicken',
        imageUrl: 'https://i.pinimg.com/originals/1b/f6/b2/1bf6b208228b8f32a89329f6d7cd9dcd.jpg',
        id: 10,
        pieces: '3 pieces',
        extra: 'Chips',
        drinks: '300ml Drinks',
        price: 15
    },
    {
        title: 'Box Master',
        imageUrl: 'https://martjackamstorage.blob.core.windows.net/am-resources/4b24cc55-db82-4ab3-84dd-350bbc5e3a93/Images/ProductImages/Source/BOX-MASTER.png',
        id: 11,
        pieces: '3 pieces',
        extra: 'Chips',
        drinks: '300ml Drinks',
        price: 15
    },
    {
        title: 'Box Master 2',
        imageUrl: 'https://martjackamstorage.blob.core.windows.net/am-resources/4b24cc55-db82-4ab3-84dd-350bbc5e3a93/Images/ProductImages/Source/BOX-MASTER.png',
        id: 12,
        pieces: '3 pieces',
        extra: 'Chips',
        drinks: '300ml Drinks',
        price: 15
    },
    {
        title: 'Twister',
        imageUrl: 'https://d12n9cpx6835mo.cloudfront.net/Twister_web_mobile.jpg?v=131.8',
        id: 13,
        pieces: '3 pieces',
        extra: 'Chips',
        drinks: '300ml Drinks',
        price: 15
    },
]
};

const collectionReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state
    }
};

export default collectionReducer;