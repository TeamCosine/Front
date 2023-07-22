import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width : vw;
    height: 15vh;
    border-radius: 10px;
    border : 2px solid #d8e8fd;
    background-color: white;    
`;

const Title = styled.div`
   padding-top: 1.5vh;
   padding-left : 1vw;
   padding-right: 1vw;
   padding-bottom: 1vh;
   
`;
const Btn=styled.button`
   width : 93%;
   color :white;
   background-color: #FFA0A0;
   border-radius: 10px;
   font-size: 15px;
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