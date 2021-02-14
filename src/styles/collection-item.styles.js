import styled from 'styled-components';

const CollectionItemBlock = styled.div`

    width: 22%;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;

    .image {
        width: 100%;
        height: 95%;
        background: no-repeat center/cover url(${props => props.background});
        margin-bottom: 5px;
    }

    .collection-footer {
        width: 100%;
        height: 5%;
        display: flex;
        justify-content: space-between;
        font-size: 18px;

        .name {
        width: 90%;
        margin-bottom: 15px;
        }

        .price {
        width: 10%;
        }
    }

`;

export default CollectionItemBlock;