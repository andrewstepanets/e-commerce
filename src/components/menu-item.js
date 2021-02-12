
import React from 'react';
import { MenuItemBlock, ContentBlock } from 'styles/menu.styles';

export function MenuItem({ title }) {
    return (

        <MenuItemBlock className="menu-item">
            <ContentBlock className="content">
                <h2 className="title">{title}</h2>
                <span className="subtitle">Shop Now</span>
            </ContentBlock>
        </MenuItemBlock>
    )
}

export default MenuItem;