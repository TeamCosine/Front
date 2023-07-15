import React from "react";
import styled from "styled-components";

const Container = styled.div`
    border-radius: 10px;
    width : 20vw;
    border-color: #D8E8FD;
    
`;
const Title = styled.div``;
const Btn=styled.button`
   width : 93
`;

const Card = () =>{
    return (
        <Container>
            <Title></Title>
            <Btn>2개의 답변</Btn>

        </Container>
    )
}

export default Card;