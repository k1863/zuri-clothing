import React from "react";
import "./CollectionItemStyles.scss";
import CustomButton from "../CustomButton/CustomButton";
import { connect } from "react-redux";
import { AddItem } from "../../redux/Cart/CartAction.js";

const CollectionItem = ({ item, AddItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={()=> AddItem(item)} inverted>ADD TO CART</CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  AddItem: (item) => dispatch(AddItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
