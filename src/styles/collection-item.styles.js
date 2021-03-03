import styled from 'styled-components';

const CollectionItemBlock = styled.div`

    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;

    .image {
        width: 100%;
        height: 95%;
        background: no-repeat center/cover url(${props => props.background});
        margin-bottom: 5px;
    }

    .custom-button {
        width:80%;
        opacity: 0.7;
        position: absolute;
        top: 255px;
        display: none;
    }

    &:hover {
        .image {
            opacity: 0.8;
        }
        .custom-button {
            opacity: 0.85;
            display: flex;
        }
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