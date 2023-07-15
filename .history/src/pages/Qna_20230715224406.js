import React from "react";
import styled from 'styled-components';
import Card from "../components/MyInfo/Card";
import Title from "../components/common/Title";

const Container = styled.div`
    
`;

const Qna =()=>{
    return (
        <>
          <Title text={"QNA"}/>
          <Container>
            <GridContainer></GridContainer>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </Container>
        </>
    )
}

export default Qna;