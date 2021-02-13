
import React from 'react';
import { MenuItemBlock, ContentBlock } from 'styles/menu.styles';

export function MenuItem({ title, imageUrl, size }) {
    return (

        <MenuItemBlock className={`${size} menu-item`} background={imageUrl}>
            <div className="background-image">

            </div>
            <ContentBlock className="content">
                <h2 className="title">{title.toUpperCase()}</h2>
                <span className="subtitle">Shop Now</span>
            </ContentBlock>
        </MenuItemBlock>
    )
}

export default MenuItem;