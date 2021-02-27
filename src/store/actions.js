import superagent from 'superagent';
import axios from "axios";
// .env
const apiProds = 'https://api-server-401d14.herokuapp.com/products';
const apiCats = 'https://api-server-401d14.herokuapp.com/categories';

export const getRemoteData = (activeCategory) => (dispatch) => {
    console.log("inside dispatch of getRemoteData!!!! ")
    superagent.get(apiProds).then(dataProds => {
        superagent.get(apiCats).then(dataCat => {
            return dispatch(getAction({ products: dataProds.body.results, categories: dataCat.body.results, activeCategory: activeCategory }))
        });
    });
}


export const changeActiveCategory = (activeCategory) => (dispatch) => {
    return dispatch(getActiveCategory(activeCategory))
}




// export const updateRemoteData = () => (dispatch) => {

// }
// action creator function.


const getAction = payload => {
    console.log("in getAction@@@@@@@@@!!!!", payload)
    return {
        type: 'GET',
        payload: payload
    }
}


const getActiveCategory = payload => {
    console.log("activecaaaat >>>>", payload)
    return {
        // this object will be passed to the reducer 
        type: "activeCategory",
        payload: payload
    }
}

