import React from 'react';
import styled from 'styled-components';

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
   width: 35vw;
   height: 75vh;
   border-radius: 20px;
   text-align: center;
   display : flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

`;

const FieldContainer = styled.div`
   display: flex;
   align-items: center;
   margin-bottom: 20px;
   text-align: center;
   
`;

const Label = styled.p`
   margin-right: 10px;
   font-weight: bold;
   text-align: center;
   
`;

const Input = styled.input`
    background-color: #d9d9d9;
    width : 13vw;
    border-radius: 3px;
    border:none;
    height: 4vh;
    

   
`;

const Invitebtn = styled.button`
    width : 13vw;
    margin-top: 3vh;
    background-color: #006FFF;
    color : white;
    font-weight: bold;

`;

const Invite = () => {
   return (
      <>
         <Container>
            <InviteContainer>
               <p style={{ fontSize: '25px', fontWeight: 'bold' }}>회원가입</p>
               <FieldContainer>
                  <Label>아이디</Label>
                  <Input />
                  <button>중복확인</button>
               </FieldContainer>
               <FieldContainer>
                  <Label>비밀번호</Label>
                  <Input />
               </FieldContainer>
               <FieldContainer>
                  <Label>이메일</Label>
                  <Input />
               </FieldContainer>
               <FieldContainer>
                  <Label>닉네임</Label>
                  <Input />
               </FieldContainer>
               {/* button */}
               <Invitebtn>가입 완료하기</Invitebtn>
            </InviteContainer>
         </Container>
      </>
   );
};

export default Invite;
