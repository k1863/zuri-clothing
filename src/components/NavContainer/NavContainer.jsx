import React from "react";
import Logo from "../../zuri.png";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/Cart/CartSelectors";
import { selectCurrentUser } from "../../redux/user/userSelector.js";

import {
  NavContainerStyle,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./NavContainerStyles";

const NavContainer = ({ currentUser, hidden }) => {
  return (
    <NavContainerStyle>
      <LogoContainer to="/">
        <img className="logo" src={Logo} alt="zuri-logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/shop">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}

        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </NavContainerStyle>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(NavContainer);
