import React from "react";
import styled from "styled-components";

const Container = styled.div`
    border-radius: 10px;
    width : 20vw;
    border-color: #D8E8FD;
    
`;

const Card = () =>{
    return (
        <Container>
            <Title></Title>
            <Button>2개의 답변</Button>

        </Container>
    )
}

export default Card;