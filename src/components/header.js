import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { removeItem } from "../store/cart"
import { connect } from "react-redux";
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = props => {
  const classes = useStyles();
  console.log(props.cartItems)

  const [anchorEl, setAnchorEl] = React.useState(null);


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }))(Badge);


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            Menna Store
          </IconButton>
          <Typography variant="h6" className={classes.title}>
           
          </Typography>
          <div>
            
            <IconButton aria-label="cart" onClick={handleClick}>
              <StyledBadge badgeContent={props.cartItems.card.totalItems} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {props.cartItems.card.items.map(ele => {
                return <MenuItem  style={{width:200}} onClick={handleClose} id={ele.name} key={ele.name}>{ele.name}  </MenuItem >
              })}
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}


const mapStateToProps = state => ({
  cartItems: state
});

const mapDispatchToProps = { removeItem } // this will change on the state inside the store after the action was triggering the reducer within the click.

export default connect(mapStateToProps, mapDispatchToProps)(Header);