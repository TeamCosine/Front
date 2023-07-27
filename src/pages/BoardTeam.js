import React from "react";
import styled from 'styled-components';
import Card from "../components/BoardTeam/Card";
import BoardTitle from "../components/common/BoardTitle";

const Container = styled.div`
   
`;
const GridContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   grid-gap: 3vh;
   padding-left: 22vw;
   padding-right: 22vw;
   padding-top: 2vh;
`;

const BoardTeam =()=>{
    return (
        <>
          <BoardTitle text={"👥 팀원모집 게시판"}/>
          <Container>
            <GridContainer>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            </GridContainer>
          </Container>
        </>
    )
}

export default BoardTeam;