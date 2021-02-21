import styled from 'styled-components';

const SignInBlock = styled.div`

    width: 380px;
    display: flex;
    flex-direction: column;

    .title {
        margin: 10px  0;
    }
    form {
        flex: 1;
    }
    .buttons {
        display: flex;
        justify-content: space-between;
    }
`;

export default SignInBlock;