import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import { connect } from "react-redux";
import CartItem from "../CartItem/CartItem";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/Cart/CartSelectors.js";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/Cart/CartAction.js";

import "./CartDropdownStyles.scss";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length? cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      )) : 
    (<span className="empty-message">Your cart is empty</span>)
    }
    </div>
    <CustomButton onClick={() => {
      history.push('/checkout');
      dispatch(toggleCartHidden());
    } }>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
