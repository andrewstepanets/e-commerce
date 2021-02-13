
import React from 'react';
import { withRouter } from 'react-router-dom';
import { MenuItemBlock, ContentBlock } from 'styles/menu.styles';

export function MenuItem({ title, imageUrl, size, linkUrl, history, match }) {
    return (

        <MenuItemBlock
            className={`${size} menu-item`}
            background={imageUrl}
            onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div className="background-image">

            </div>
            <ContentBlock className="content">
                <h2 className="title">{title.toUpperCase()}</h2>
                <span className="subtitle">Shop Now</span>
            </ContentBlock>
        </MenuItemBlock>
    )
}

export default withRouter(MenuItem);