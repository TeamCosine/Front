//회원 정보 수정
import React from "react";
import styled from 'styled-components';

const Container = styled.div``;

const Title = styled.div``;

const ProfileContainer= styled.div`
   background-color: #D8E8FD;
   border-radius: 20px;
   display: flex;
   flex-direction: column;
   justify-content: center;
`;
const ProfileCard = styled.div`
    border-radius: 20px;
    background-color: #D8E8FD;

`;
const EmailContainer = styled.div`
    flex-direction: row;
`;
const InputEmail = styled.input``;
const NickContainer = styled(EmailContainer);
const InputNick = styled(InputEmail);
const PWContainer = styled.div(EmailContainer);
const InputPw = styled(InputNick);
const ButtonContainer = styled.div``;

const Profile = () =>{
    return (
        <>
          <Container>
            <Title>회원 정보 수정</Title>
            <ProfileContainer>
                <p>👩🏻‍💻 안녕하세요 nickname님</p>
                <ProfileCard>
                    <PWContainer>
                        <p>비밀번호</p>
                        <InputPw />
                    </PWContainer>
                    <EmailContainer>
                        <p>이메일</p>
                        <InputEmail />
                    </EmailContainer>
                    <NickContainer>
                        <p>닉네임</p>
                        <InputNick />
                    </NickContainer>
                </ProfileCard>
                <ButtonContainer>

                </ButtonContainer>

            </ProfileContainer>

          </Container>
        
        </>
    )

}

export default Profile;