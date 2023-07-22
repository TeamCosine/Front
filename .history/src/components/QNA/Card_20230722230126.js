import React from "react";
import styled from "styled-components";

const Container = styled.div`
   border-radius: 10px;
   border : 3px solid #d8e8fd;
   background-color: white;
   width : 220px;
   height : 180px;
   
`;
const Text = styled.div`
   padding-top: 2vh;
   color : #006fff;
   font-size: 23px;
   font-weight: 800;
   flex-shrink: 0;
   padding-bottom: 3vh;
   padding-left : 1vw;
   padding-right: 1;
`;
const Btn = styled.button`
    text-align: center;
    width : 210px;
    height : 32px;
    background-color: #ffa0a0;
    flex-shrink: 0;
    color : white;
    border-radius: 10px;
    border:none;
    font-weight: bold;
`;
const Card =() =>{

    return (
        <>
           <Container>
              <Text>[React]React-router-dom 실행이 안되요.</Text>
              <div>
                <Btn>🔍 2개의 답변</Btn>
              </div>

           </Container>
        </>
    )

}

export default Card;