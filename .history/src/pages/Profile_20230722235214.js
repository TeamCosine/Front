//회원 정보 수정
import React from "react";
import { styled } from "styled-components";
const Title = styled.div``;
const Profilecontainer = styled.div``;
const Nick = styled.div``;
const Container = styled.div`
    background-color: #d8e8fd;

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
    background-color: white;
    width : 250px;
    border-radius: 3px;
    border:none;
    height: 4vh;
    

   
`;

const Btn =styled.button`
    width: 130px;
    height : 30px;
    font-weight: bold;
    border-radius: 20px;
    border: none;
    background-color: #006FFF;
    flex-shrink: 0;
`;
const Profile = () =>{
    return (
        <>
          <Profilecontainer>
            <Title>회원 정보 수정</Title>
            <Nick>👩‍💻 안녕하세요 닉네임님!</Nick>
            <Container>
               <FieldContainer>
                  <Label >비밀번호</Label>
                  <Input style={{marginRight:'30px'}}/>
                  <Input style={{marginRight:'30px'}}/></div>
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