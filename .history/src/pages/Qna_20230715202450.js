import React from "react";
import styled from 'styled-component';
import Card from "../components/MyInfo/Card";
import Title from "../components/common/title";

const Container = styled.div`
    
`;

const Qna =()=>{
    return (
        <>
          <Title text={"QNA"}/>
          <Container>
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