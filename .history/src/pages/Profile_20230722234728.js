//회원 정보 수정
import React from "react";
import { styled } from "styled-components";
const Title = styled.div``;
const Profilecontainer = styled.div``;
const Nick = styled.div``;
const Container = styled.div``;
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
               </FieldContainer>
               <FieldContainer>
                  <Label>이메일</Label>
                  <Input style={{marginRight:'40px'}}/>
               </FieldContainer>
               <FieldContainer>
                  <Label>닉네임</Label>
                  <Input style={{marginRight:'40px'}}/>
               </FieldContainer>


            </Container>
          </Profilecontainer>
            
        </>
    )

}

export default Profile;