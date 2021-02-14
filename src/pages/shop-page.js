import React from 'react';
import CollectionPreview from 'components/collection-preview';
import SHOP_DATA from 'data/shop.data';

function ShopPage() {
    return (
        <div className="shop-page">
            {
                SHOP_DATA.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
        </div>
    )
}

export default ShopPage;