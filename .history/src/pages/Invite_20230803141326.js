import React from 'react';
import styled from 'styled-components';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
   width: 100vw;
   height: 100vh;
   background-color: #E8F1FD;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;

const InviteContainer = styled.div`
   background-color: white;
   width: 420px;
   height: 470px;
   border-radius: 20px;
   text-align: center;
   display : flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding-bottom: 5vh;

`;

const FieldContainer = styled.div`
   display: flex;
   align-items: center;
   margin-bottom: 10px;
   text-align: center;
   
`;

const Label = styled.p`
   margin-right: 10px;
   font-weight: bold;
   text-align: center;
   
`;

const Input = styled.input`
    background-color: #d9d9d9;
    width : 250px;
    border-radius: 3px;
    border:none;
    height: 4vh;
    

   
`;

const Invitebtn = styled.button`
    width : 130px;
    margin-top: 2vh;
    background-color: #006FFF;
    color : white;
    font-weight: bold;
    border:none;
    border-radius: 13px;
    height : 32px;
    font-size: 16px;
    font-weight: 800;
    text-align: center;
    flex-shrink: 0;

`;

const Invite = () => {

   const [id, setId] = useState('');
   const [password, setPassword] = useState('');
   const [email, setEmail] = useState('');
   const [nickname, setNickname] = useState('');

   const navigate = useNavigate();

   const handleSignup = () =>{
      fetch('../users/new-user', {
         method : 'POST',
         headers : {
            'Content-Type' : 'application/json',
         }, 
         body : JSON.stringify({
            id,
            password,
            email,
            nickname,
         })
      }).then(response =>{
         if (response.ok) {
            navigate('/home');

         }else {

         }

      })
      .catch(error =>{

      })
   }

   return (
      <>
         <Container>
            <InviteContainer>
               <p style={{ fontSize: '25px', fontWeight: 'bold' }}>회원가입</p>
               <FieldContainer>
                  <Label>아이디</Label>
                  <Input 
                     value = {}
                  />
                  <button style={{width:'35px', height:'35px',backgroundColor:'#006fff',textAlign:'center',fontWeight:'bold',color:'white',fontSize:'8px',borderRadius:'8px',border:'none',marginLeft:'5px' }}>중복확인</button>
               </FieldContainer>
               <FieldContainer>
                  <Label >비밀번호</Label>
                  <Input style={{marginRight:'30px'}}/>
               </FieldContainer>
               <FieldContainer>
                  <Label>이메일</Label>
                  <Input style={{marginRight:'40px'}}/>
               </FieldContainer>
               <FieldContainer>
                  <Label>닉네임</Label>
                  <Input style={{marginRight:'40px'}}/>
               </FieldContainer>
               {/* button */}
               <Invitebtn>가입 완료하기</Invitebtn>
            </InviteContainer>
         </Container>
      </>
   );
};

export default Invite;
