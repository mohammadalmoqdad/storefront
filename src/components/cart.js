import React from 'react';
import { connect } from 'react-redux';
import { Card, ListItem } from "@material-ui/core";

const Status = props => {
    console.log(props.cartItems)

    return (
        <Card>
              
        </Card>
    )
}


const mapStateToProps = state => ({
    cartItems: state
});

export default connect(mapStateToProps)(Status);
