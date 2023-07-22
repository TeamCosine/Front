import React from "react";
import styled from 'styled-components';
import Card from "../components/QNA/Card";
import Title from "../components/common/Title";

const Container = styled.div`
   
`;
const GridContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   grid-gap: 1vh;
   padding-left: 15vw;
   padding-right: 15vw;
`;

const Qna =()=>{
    return (
        <>
          <Title text={"QNA"}/>
          <Container>
            <GridContainer>
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

export default Qna;