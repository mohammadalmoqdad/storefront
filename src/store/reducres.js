let initialState = {
    categories: [],
    products: [],
    activeCategory: ''
};

// reducer
export default (state = initialState, action) => {
    const { type, payload } = action;
    console.log("Type in Reducer = ", type)
    switch (type) {
        case 'GET':
            console.log("payload >>>> ", payload)
            // I can play around with the response of the API
            // remove stuff/ add stuff
            return { ...state, categories: payload.categories, products: payload.products, activeCategory: "electronics" };
        case "activeCategory":
            return { ...state, activeCategory: payload }

        case "ADDTOCART":

            return { ...state, categories: payload.categories, products: payload.products, }
        case "REMOVEFROMCART":
            return;
        case 'PUT':
            return payload;
        default:
            return state;
    }
}