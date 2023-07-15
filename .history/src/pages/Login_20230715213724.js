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
   margin-top: 10vh;
   text-align: center;
   font-weight: 800;
   font-size: 30px;
   letter-spacing: 6px;
   align-self: center;
   margin-bottom: 10vh;

   
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
    width: 30vw;
    font-size: 25px;
    background-color: transparent;
    border-top:0px;
    border-bottom:1px solid;
    border-left: 0px;
    border-right: 0px;




   `;
const InputPW = styled(InputId)`
     width: 30vw;
     font-size: 25px;
     margin-bottom: 5vh;
     background-color: transparent;
     border-top:0px;
     border-bottom:1px solid;
     border-left: 0px;
     border-right: 0px;
`;
const ButtonContainer= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 18vh;
    
   `;
const Loginbtn = styled.button`
    width : 18vh;
    height : 5vh;
    margin-bottom: 2vh;
    background-color: #006FFF;
    border-radius: 20px;

`;
const Invitebtn = styled.button`
    width: 18vh;
    height:5vh;
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
          <p>Eveleoper</p>
        </Logincontainer>
    )

}

export default Login;