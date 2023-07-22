//회원 정보 수정
import React from "react";
import { styled } from "styled-components";
const Title = styled.div``;
const Profilecontainer = styled.div``;
const Nick = styled.div``;
const Profile = () =>{
    return (
        <>
          <Profilecontainer>
            <Title>회원 정보 수정</Title>
            <Nick>👩‍💻안녕하세요 닉네임님!</Nick>
          </Profilecontainer>
            
        </>
    )

}

export default Profile;