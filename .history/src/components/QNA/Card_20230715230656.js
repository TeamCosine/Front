import React from "react";
import styled from "styled-components";

const Container = styled.div`
    border-radius: 10px;
    width : 20vw;
    height: 15vh;
    border-radius: 10px;
    border : 3px solid #d8e8fd;
   
    
`;
const Title = styled.div``;
const Btn=styled.button`
   width : 93%;
   color :white;
   background-color: #FFA0A0;
   flex-shrink: 0;
   font-size: 20px;
   border-color: none;


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