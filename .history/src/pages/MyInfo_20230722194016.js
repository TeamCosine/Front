//내정보 페이지
import React from "react";
import styled from 'styled-components';
import Card from "../components/MyInfo/Card";



const Myinfocontainer = styled.div`
   text-align: center;
   display: flex;
`;

const Title = styled.div`
    display: flex;
    text-align: center;
    font-size: 25px;
    font-weight: 700;
    color :black;
    justify-self: center;
`;

const GaesiContainer = styled.div`
    display :flex;
    flex-direction: row;
`;

const Container = styled.div`
   border-radius: 15px;
   width : 25vw;
   height : 33vh;
   background-color: #d9d9d9;
   flex-shrink: 0;

`;

const MyLike = styled.div``;

const MyWrite = styled.div``;

const Nick = styled.div`
    display: flex;
    font-size: 30px;
    font-weight: 700;

`;

const MyInfo =() =>{

    return (
        <Myinfocontainer>
        <Title>My Page</Title>
        <Nick>
            <p>닉네임님</p>
            

        </Nick>

        <GaesiContainer>
            <MyLike>
               <p>💙 좋아하는 게시물</p>
                <Container>
                    <Card />
                    <Card />
                    <Card />
                </Container>
            </MyLike>
            <MyWrite>
                <p>✍🏻 내가 쓴 게시물</p>
                <Container>
                    <Card />
                    <Card />
                    <Card />
                </Container>

            </MyWrite>
        </GaesiContainer>
        </Myinfocontainer>

    )
}

export default MyInfo;