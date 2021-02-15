import products from "../components/products";



let initialState = {
    categories: [
        { name: 'electronics', displayName: 'Elecronics' },
        { name: 'food', displayName: 'Food' },
        { name: 'clothing', displayName: 'Clothing' },
    ],
    products: [
        { name: 'TV', category: 'electronics', price: 699.00, inStock: 5 },
        { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15 },
        { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25 },
        { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10 },
        { name: 'Apples', category: 'food', price: .99, inStock: 500 },
        { name: 'Eggs', category: 'food', price: 1.99, inStock: 12 },
        { name: 'Bread', category: 'food', price: 2.39, inStock: 90 },
    ],
    activeCategory: 'electronics'
};



export default (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case "catigories":
            if (payload.toLowerCase() == "electronics" || payload.toLowerCase() == "clothing" || payload.toLowerCase() == "food")
                return { ...state, activeCategory: payload }; // return copy alwayyyyyyyyyyyyyyyyyss
        default:
            return {...state};
    }

}

export const sendActiveCat = (activeCategory) => {
    console.log("activecaaaat >>>>", activeCategory)
    return {
        // this object will be passed to the reducer 
        type: "catigories",
        payload: activeCategory
    }
}
