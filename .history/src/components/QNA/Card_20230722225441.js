import React from "react";
import styled from "styled-components";

const Container = styled.div`
   border-radius: 10px;
   border : 3px solid #d8e8fd;
   background-color: white;
   width : 283px;
   height : 210px;
   
`;
const Text = styled.div`
   color : #006fff;
   font-size: 25px;
   font-weight: 800;
   flex-shrink: 0;
`;
const Btn = styled.button`
    font-size 
`;
const Card =() =>{

    return (
        <>
           <Container>
              <Text>[React]React-router-dom 실행이 안되요.</Text>
              <div>
                <Btn>2개의 답변</Btn>
              </div>

           </Container>
        </>
    )

}

export default Card;