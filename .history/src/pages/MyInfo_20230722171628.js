//내정보 페이지
import React from "react";
import styled from 'styled-components';
import Card from "../components/MyInfo/Card";

const Myinfocontainer = styled.div`
   text-align: center;
`;

const Title = styled.div`
    display: flex;
    text-align: center;
    font-size: 30px;
    font-weight: 700;
    color :black;
`;

const Container = styled.div`
   flex-direction: row;
   
`;

const MyLike = styled.div``;

const MyWrite = styled.div``;

const Nick = styled.div`
    display: flex;
    font-size: 50px;
    font-weight: 700;

`;

const MyInfo =() =>{

    return (
        <Myinfocontainer>
        <Title>My Page</Title>
        <Nick>
            <p>닉네임님</p>
            

        </Nick>

        <Container>
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
        </Container>
        </Myinfocontainer>

    )
}

export default MyInfo;