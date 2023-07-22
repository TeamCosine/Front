import React from "react";
import styled from 'styled-components';
import Card from "../components/QNA/Card";
//import Title from "../components/common/Title";

const Container = styled.div`
   
`;
const GridContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   grid-gap: 3vh;
   padding-left: 22vw;
   padding-right: 22vw;
   padding-top: 5vh;
`;
const Title = styled.div`
    
    background-color: #e8f1fd;
    border-radius: 15px;
    width : 12vw;
    height : 10vh;
    font-weight : 800;
    text-align: center;
    justify-items :center;
    display: flex-wrap;
    justify-content: center;

`;

const Qna =()=>{
    return (
        <>
          {/* <Title text={"QNA"}/> */}
          <Title>❓ Q & A</Title>
          <Container>
            <GridContainer>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card />
            <Card/>
            </GridContainer>
          </Container>
        </>
    )
}

export default Qna;