import React from 'react';
import styled from 'styled-components';
import Hello from '../assets/Login/Hello.svg';

const Logincontainer= styled.div`
  background-color: #3E8DF4;
  
  
`;

const Title = styled.p`
   text-align: center;
   font-weight: 800;
   font-size: 30px;
   letter-spacing: 6px;
   align-self: center;

   
`;
const Container = styled.div``;
const InputContainer = styled.div``;
const InputId = styled.input``;
const InputPW = styled(InputId)``;
const ButtonContainer= styled.div``;
const Helloicon = styled(Hello)``;

const Login =() =>{

    return (
        <Logincontainer>
          <Title>이화인들을 위한, 이화인들에 의한 개발자 커뮤니티</Title>
          <Container>

            <InputContainer>
               <He
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