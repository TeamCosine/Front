import React from "react";
import styled from 'styled-components';
import Card from "../components/QNA/Card";
import Title from "../components/common/Title";

const Container = styled.div`
    
`;
const GridContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   grid-gap:3vh;
   gri
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