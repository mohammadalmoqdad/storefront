import React from 'react';
import { connect } from 'react-redux';
import { sendActiveCat } from "../store/data";
import { Button } from '@material-ui/core';
import Box from '@material-ui/core/Box';
const Status = props => {
    console.log(props.categoryState.data.activeCategory)
    return (
        <Box bgcolor="background.paper"  style={{display:"flex", justifyContent:"space-evenly", marginTop:30 }}>
          
                {props.categoryState.data.categories.map(ele => (<Button variant="contained" color="secondary"  onClick={() => props.sendActiveCat(ele.name)} id={ele.name} key={ele.name}> {ele.displayName} </Button >))}
            
        </Box >
    )
}

const mapStateToProps = state => ({
    categoryState: state
});

const mapDispatchToProps = { sendActiveCat } // this will change on the state inside the store after the action was triggering the reducer within the click.

export default connect(mapStateToProps, mapDispatchToProps)(Status);
