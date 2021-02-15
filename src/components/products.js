import React from 'react';
import { connect } from 'react-redux';
import { Card ,ListItem ,Collapse } from "@material-ui/core";

const Status = props => {
    console.log(props.categoryState.data)

    return (
        <Card>
            <ul>
                {props.categoryState.data.products.map(ele => {
                    if (ele.category === props.categoryState.data.activeCategory)
                        return <ListItem  id={ele.name} key={ele.name}>{ele.name} {ele.price} </ListItem >
                })}
            </ul>
        </Card>
    )
}


const mapStateToProps = state => ({
    categoryState: state
});

export default connect(mapStateToProps)(Status);
