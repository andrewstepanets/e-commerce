import React from 'react';
import CollectionPreviewBlock from '../styles/collection-preview.styles';
import CollectionItem from '../components/collection-item';

function CollectionPreview({ title, items }) {
    return (
        <CollectionPreviewBlock className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items.filter((item, idx) => idx < 4).map((item) => (
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </div>
        </CollectionPreviewBlock>
    )
}

export default CollectionPreview;