import React from 'react';
import styled from 'styled-components';
import {ReactComponent as Loginicon} from '../assets/Login/Hello.svg' ;
import {ReactComponent as Main} from '../assets/common/Mainicon.svg';

const Logincontainer= styled.div`
  background-color: #E8F1FD;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width:100vw;

  
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
   display: flex;
    align-items: center;
    justify-content: space-between;
    width : 100vw;
`;
const InputContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-top : 20px;
   margin-right:10vw;
   margin-left : -35vw;
   
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
    width : 25vh;
    height : 6vh;
    margin-bottom: 2vh;
    background-color: #006FFF;
    border-radius: 20px;
    color:white;
    border: none;
    font-size: 18px;


`;
const Invitebtn = styled.button`
    width: 25vh;
    height:5vh;
    background-color: white;
    border:none;
    color : #006fff;
    border-radius: 20px;
    font-size: 18px;

`;

const LoginIcon = styled(Loginicon)`
      margin-bottom : 2vh;
`;

const MainIcon = styled(Main)`
     padding-right: ;
    
 `;

const Login =() =>{

    return (
        <Logincontainer>
          <Title>이화인들을 위한, 이화인들에 의한 개발자 커뮤니티</Title>
          <Container>
              <MainIcon />

            <InputContainer>
               <LoginIcon/>
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