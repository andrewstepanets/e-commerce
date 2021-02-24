import React from 'react';
import CollectionItemBlock from '../styles/collection-item.styles';

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
        </CollectionItemBlock>
    )
}

export default CollectionItem;
