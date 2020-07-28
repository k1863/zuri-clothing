import React, { Component } from 'react';
import ShopData from "./ShopData.js";
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview.jsx"

class ShopPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: ShopData
        }
    }
    render() {
        const { collections } = this.state;
        return (
            <div className="shop-page">
                {collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))}
            </div>
        );
    }
}

export default ShopPage;