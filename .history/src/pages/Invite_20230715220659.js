//회원가입 페이지입니다.
import React from "react";
import styled from 'styled-components';

const Container = styled.div`
   width: 100vw;
   height: 100vh;
   background-color: #3E8DF4;
   display: flex;
   flex-direction: column;
`;
const InviteContainer = styled.div``;
const IdContainer= styled.div``;
const InputId = styled.input``;
const PwContainer = styled(IdContainer)``;
const InputPw = styled(InputId)``;
const EmailContainer = styled(IdContainer)``;
const InputEmail = styled(InputId)``;
const NickContainer = styled(IdContainer)``;
const InputNick = styled(InputId)``;


const Invite =() =>{

    return (
        <>
          <Container>
            <InviteContainer>
                <p>회원가입</p>
                <IdContainer>
                    <p>아이디</p>
                    <InputId />
                    <button>중복확인</button>
                </IdContainer>
                <PwContainer>
                    <p>비밀번호</p>
                    <InputPw />

                </PwContainer>
                <EmailContainer>
                    <p>이메일</p>
                    <InputEmail />
                </EmailContainer>
                <NickContainer>
                    <p>닉네임</p>
                    <InputNick />
                </NickContainer>
                {/* button */}

            </InviteContainer>

          </Container>
        
        </>
    )

}

export default Invite;