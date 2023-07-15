import React from 'react';
import styled from 'styled-components';

const Logincontainer= styled.div`
  background-color: #3E8DF4;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`;

const Title = styled.p`
   text-align: center;
   font-weight: 800;
   font-size: 30px;
   letter-spacing: 6px;
   align-self: center;

   
`;
const Container = styled.div`
    
`;
const InputContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-top : 20px;
`;
const InputId = styled.input`
    margin-bottom: 5vh;
   `;
const InputPW = styled(InputId)``;
const ButtonContainer= styled.div``;
const Loginbtn = styled.button`
    width : 18vh;
    height : 5vh;
`;
const Invitebtn = styled.button`
    width: ;
`;


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
            <Loginbtn>로그인</Loginbtn>
            <Invitebtn>회원가입</Invitebtn>

          </ButtonContainer>
        </Logincontainer>
    )

}

export default Login;