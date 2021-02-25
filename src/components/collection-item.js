import React from 'react';
import CollectionItemBlock from '../styles/collection-item.styles';
import CustomButton from '../components/custom-button';

function CollectionItem({ id, name, price, imageUrl }) {
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
            <CustomButton inverted >
                Add To Cart
            </CustomButton>
        </CollectionItemBlock>
    )
}

export default CollectionItem;
