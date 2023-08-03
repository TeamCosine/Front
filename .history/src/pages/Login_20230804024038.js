import React from 'react';
import styled from 'styled-components';
import {ReactComponent as Loginicon} from '../assets/Login/Hello.svg' ;
import {ReactComponent as Main} from '../assets/common/Mainicon.svg';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux';



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
     const dispatch = useDispatch();
     
    const [inputs, setInput] = useState({
      id : "",
      password : "",
    })
    
     const handleLogin =() =>{
      fetch('../users/login', {
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
          id,
          password,

        })
      }).then(response =>{
        if (response.ok ){
          navigate('/home');
        } else {
          setLoginError(true);
        }
      }

      ).catch(error=>{
        setLoginError(true);
      })
     }


     const onSubmit =(e) =>{
      e.preventDefault();
      let body = {
        id : id,
        password : password,
      };
      if (!id || !password) {
        alert("필수 항목을 작성해주세요!");
      } else {
         dispatch().thecn((response) =>{
          if (response.payload.loginSuccess) {
            window.localStorage.setItem('id', response.payload.id);
            navigate('/home');
          } else {
            alert(response.payload.message);
          }
         })

      }

     }

    return (
        <Logincontainer>
          <form onSubmit={onSubmit}>
          <Title>이화인들을 위한, 이화인들에 의한 개발자 커뮤니티</Title>
          <Container>
              <MainIcon />

            <InputContainer>
               <LoginIcon/>
               
               <InputId 
               value = {id}
               onChange={onChange}
               placeholder='아이디'
               type = "text"
               name = "id"
               />
               <InputPW
               value = {password}
               onChange={onChange}
               placeholder = "비밀번호"
               type = "password"
               value = {password}
               name = "password"
               />
            </InputContainer>
           
          </Container>
          <ButtonContainer>
            <Loginbtn type = "submit">로그인</Loginbtn>
            
            <Invitebtn>회원가입</Invitebtn>

          </ButtonContainer>
         </form>
        </Logincontainer>
    )

}

export default Login;