//내정보 페이지
import React from "react";
import styled from 'styled-components';
import Card from "../components/MyInfo/Card";



const Myinfocontainer = styled.div`
   display: flex;
   flex-direction: column;
   padding-right: 3px;
   
`;

const Title = styled.div`
    display: flex;
    text-align: center;
    font-size: 25px;
    font-weight: 700;
    color :black;
    justify-content: center;
    margin-top: 14vh;
    
`;

const GaesiContainer = styled.div`
    display :flex;
    flex-direction: row;
    padding-top: 2vh;
    justify-content: center;

`;

const Container = styled.div`
   border-radius: 15px;
   width : 25vw;
   background-color: #d9d9d9;
   flex-shrink: 0;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: stretch;
   padding-left: 1vw;
   margin-left: 1vw;
   


`;

const MyLike = styled.div`
    margin-right : 3vw;
`;

const MyWrite = styled.div``;

const Nick = styled.div`
    display: flex;
    font-size: 30px;
    font-weight: 700;
    padding-top: 3vh;
    padding-left: 22vw;
    margin-right : 1vw;

`;

const Btn = styled.button`
    background-color: #006FFF;
    color : white;
    border-radius: 20px;
    width: 120px;
    height : 26px;
    border:none;
    font-size :11px;
    margin-left: 1vw;
    margin-top: 5vh;
    font-weight: bold;
`;

const MyInfo =() =>{

    return (
        <Myinfocontainer>
        <Title>My Page</Title>
        <Nick>
            <p>👩🏻‍💻 닉네임</p>
            <Btn>내 정보 수정하기</Btn>

        </Nick>

        <GaesiContainer>
            <MyLike>
                내가 좋아함을 누른 글 목록 가져오는 요청 보내기
               <p style={{color:"#006FFF", fontWeight:"bold", fontSize:"20px"}}>💙 좋아하는 게시물</p>
                <Container>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Container>
            </MyLike>
            <MyWrite>
                <p style={{color:"#006FFF", fontWeight:"bold", fontSize:"20px"}}>✍🏻 내가 쓴 게시물</p>
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