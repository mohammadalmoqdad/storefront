import React from 'react';
import { connect } from 'react-redux';
import { sendActiveCat } from "../store/data";
import { Button } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import * as actions from "../store/actions";
import { useEffect } from "react";
const Status = props => {
    console.log(props.categoryState)
    useEffect(async () => {
        await props.get()
    }, [''])
    return (
        <Box bgcolor="background.paper" style={{ display: "flex", justifyContent: "space-evenly", marginTop: 30 }}>

            {props.categoryState.data.categories.map(ele => (<Button onClick={() => props.changeActiveCategory(ele.name)} variant="contained" color="secondary" id={ele._id} key={ele.name}> {ele.name} </Button >))}

        </Box >
    )
}

const mapStateToProps = state => ({
    categoryState: state
});


const mapDispatchToProps = (dispatch, getState) => ({
    get: (activeCategory) => dispatch(actions.getRemoteData(activeCategory)),
    changeActiveCategory: (activeCategory) => dispatch(actions.changeActiveCategory(activeCategory))
})

export default connect(mapStateToProps, mapDispatchToProps)(Status);
