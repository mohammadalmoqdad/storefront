import React from 'react';
import { connect } from 'react-redux';
import { Card, ListItem, Button } from "@material-ui/core";
import { addItem } from "../store/cart"
const Status = props => {
    console.log(props.categoryState.data.products)

    return (
        <Card>
            <ul style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                {props.categoryState.data.products.map((ele, i) => {
                    if (ele.category === props.categoryState.data.activeCategory)
                        return <ListItem style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", padding: 20 }} id={ele.name} key={i}>
                            <div>
                                <div style={{ textAlign: "center" }}>
                                    <h3> {ele.name} &nbsp; {ele.price}$</h3>
                                </div>
                                <div>
                                    <Button variant="contained" color="primary" onClick={() => props.addItem(ele.name)}> Add to Cart</Button>
                        &nbsp;
                        <Button variant="contained" color="primary" >View Details</Button>
                                </div>
                            </div>
                        </ListItem >
                })}
            </ul>
        </Card>
    )
}




const mapStateToProps = state => ({
    categoryState: state
});

const mapDispatchToProps = { addItem }




export default connect(mapStateToProps, mapDispatchToProps)(Status);
