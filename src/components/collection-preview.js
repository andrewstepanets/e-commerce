import React from 'react';
import CollectionPreviewBlock from 'styles/collection-preview.styles';


function CollectionPreview({ title, items }) {
    return (
        <CollectionPreviewBlock className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items.filter((item, idx) => idx < 4).map(item => (
                        <div key={item.id}>{item.name}</div>
                    ))
                }
            </div>
        </CollectionPreviewBlock>
    )
}

export default CollectionPreview;