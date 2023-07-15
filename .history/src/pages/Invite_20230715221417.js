//회원가입 페이지입니다.
import React from "react";
import styled from 'styled-components';

const Container = styled.div`
   width: 100vw;
   height: 100vh;
   background-color: #3E8DF4;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;
const InviteContainer = styled.div`
   background-color: white;
   width: 35vw;
   height: 75vh;

   const FieldContainer = styled.div`
   display: flex;
   align-items: center;
   margin-bottom: 20px;
`;

const InputId = styled.input``;

const InputPw = styled(InputId)``;

const InputEmail = styled(InputId)``;

const InputNick = styled(InputId)``;

const Invitebtn= styled.button``;

const Invite =() =>{

    return (
        <>
          <Container>
            <InviteContainer>
                <p style={{fontSize:"25px", fontWeight:"bold"}}>회원가입</p>
                <FieldContainer>
                    <p>아이디</p>
                    <InputId />
                    <button>중복확인</button>
                </FieldContainer>
                <FieldContainer>
                    <p>비밀번호</p>
                    <InputPw />

                </FieldContainer>
                <FieldContainer>
                    <p>이메일</p>
                    <InputEmail />
                </FieldContainer>
                <FieldContainer>
                    <p>닉네임</p>
                    <InputNick />
                </FieldContainer>
                {/* button */}
                <Invitebtn>가입 완료하기</Invitebtn>

            </InviteContainer>

          </Container>
        
        </>
    )

}

export default Invite;