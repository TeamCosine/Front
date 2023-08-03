import React from 'react';
import styled from 'styled-components';
import {ReactComponent as Loginicon} from '../assets/Login/Hello.svg' ;
import {ReactComponent as Main} from '../assets/common/Mainicon.svg';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';



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
    margin-bottom: 10vh;
    
`;
const InputContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-top : 20px;
   margin-right:20vw;
   margin-left : -80vw;
   
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
      margin-bottom : 5vh;
      width : 40vw;
      
`;

const MainIcon = styled(Main)`
     margin-right: -10vw;
     width : 50vw;
     margin-left: 10vw;
    
 `;

const Login =() =>{
     const navigate = useNavigate();
     
     const [id, setId] = useState('');
     const [password, setPassword] = useState('');
     const [loginError, setLoginError] = useState(false);
    
     
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
         
        </Logincontainer>
    )

}

export default Login;