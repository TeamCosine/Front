import React from 'react';
import styled from 'styled-components';


const Title = styled.p`
   text-align: center;
   
`;
const Container = styled.div``;
const InputContainer = styled.div``;
const InputId = styled.input``;
const InputPW = styled(InputId)``;
const ButtonContainer= styled.div``;


const Login =() =>{

    return (
        <Logincontainer>
        <Title>이화인들을 위한, 이화인들에 의한 개발자 커뮤니티</Title>
        <Container>

            <InputContainer>
               <InputId />
               <InputPW />
            </InputContainer>

        </Container>
        <ButtonContainer>

        </ButtonContainer>
        </Logincontainer>
    )

}

export default Login;