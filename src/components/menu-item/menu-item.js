
import React from 'react';
import { withRouter } from 'react-router-dom';
import {
    MenuItemContainer,
    BackgroundImageContainer,
    ContentContainer,
    ContentTitle,
    ContentSubtitle
} from './menu-item.styles';

export function MenuItem({ title, imageUrl, size, linkUrl, history, match }) {
    return (

        <MenuItemContainer
            size={size}
            background={imageUrl}
            onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <BackgroundImageContainer
                className='background-image'
                imageUrl={imageUrl}
            />
            <ContentContainer className="content">
                <ContentTitle>{title.toUpperCase()}</ContentTitle>
                <ContentSubtitle>Shop Now</ContentSubtitle>
            </ContentContainer>
        </MenuItemContainer>
    )
}

export default withRouter(MenuItem);