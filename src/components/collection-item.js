import React from 'react';
import CollectionItemBlock from '../styles/collection-item.styles';
import CustomButton from '../components/custom-button';

import { connect } from 'react-redux';
import { addItem } from '../redux/cart/cart.actions';

function CollectionItem({ item, addItem }) {


    const { name, price, imageUrl } = item;

    return (
        <CollectionItemBlock
            className='collection-item'
            background={imageUrl}>
            <div className="image">

            </div>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton
                onClick={() => addItem(item)}
                inverted >
                Add To Cart
            </CustomButton>
        </CollectionItemBlock>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);
