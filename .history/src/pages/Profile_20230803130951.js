//회원 정보 수정
import React from "react";
import { styled } from "styled-components";
import { useState } from "react";

const Title = styled.div`
    font-size: 25px;
    text-align: center;
    font-weight: 800;
    margin-top: 10vh;
`;
const Profilecontainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    justify-items: center;
`;
const Nick = styled.div`
    font-size: 25px;
    font-weight: 700;
    margin-top: 8vh;
    margin-bottom : 5vh;

`;
const Container = styled.div`
    background-color: #d8e8fd;
    border-radius: 15px;
    width : 400px;
    height : 350px;
    flex-shrink: 0;
    margin:0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;


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
   margin-left: 35px;


   
`;

const Input = styled.input`
    background-color: white;
    width : 250px;
    border-radius: 3px;
    border:none;
    height: 4vh;
    
    

   
`;

const Btn =styled.button`
    margin-top: 25px;
    width: 130px;
    height : 30px;
    font-weight: bold;
    border-radius: 20px;
    border: none;
    background-color: #006FFF;
    flex-shrink: 0;
    margin-left: 35px;
`;

const Divcontainer = styled.div`
    display: flex;
    flex-direction: column;
`;
const Profile = () =>{
    const [email, setEmail] =useState('');
    const [nick, setNick] = useState('');
    const []
    return (
        <>
          <Profilecontainer>
            <Title>회원 정보 수정</Title>
            <Nick>👩‍💻 안녕하세요 닉네임님!</Nick>
            <Container>
               <FieldContainer>
                  <Label >비밀번호</Label>
                  <Divcontainer>
                  <Input style={{marginRight:'30px', marginBottom:'9px'}}/>
                  <Input style={{marginRight:'30px'}}/>
                  </Divcontainer>
               </FieldContainer>
               <FieldContainer>
                  <Label>이메일</Label>
                  <Input style={{marginRight:'40px'}}/>
               </FieldContainer>
               <FieldContainer>
                  <Label>닉네임</Label>
                  <Input style={{marginRight:'40px'}}/>
               </FieldContainer>
               <FieldContainer>
                   <Btn></Btn>
                   <Btn></Btn>
               </FieldContainer>


            </Container>
          </Profilecontainer>
            
        </>
    )

}

export default Profile;