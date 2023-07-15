import React from "react";
import styled from "styled-components";

const Container = styled.div`
    border-radius: 10px;
    width : 250px;
    height: 15vh;
    border-radius: 10px;
    border : 2px solid #d8e8fd;
    background-color: white;

   
    
`;
const Title = styled.div`
   padding-top: 1.8vh;
   padding-
`;
const Btn=styled.button`
   width : 93%;
   color :white;
   background-color: #FFA0A0;
   flex-shrink: 0;
   font-size: 20px;
   border-color: transparent;


`;

const Card = () =>{
    return (
        <Container>
            <Title>[React]React-router-dom 실행이 안돼요.</Title>
            <Btn>2개의 답변</Btn>

        </Container>
    )
}

export default Card;