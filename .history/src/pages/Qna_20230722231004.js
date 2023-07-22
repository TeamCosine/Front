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
    background-color: ;
`;

const Qna =()=>{
    return (
        <>
          {/* <Title text={"QNA"}/> */}
          <Title></Title>
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