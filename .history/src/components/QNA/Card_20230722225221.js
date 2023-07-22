import React from "react";
import styled from "styled-components";

const Container = styled.div`
   border-radius: 10px;
   border : 3px solid #d8e
`;
const Text = styled.div``;
const Btn = styled.button``;
const Card =() =>{

    return (
        <>
           <Container>
              <Text></Text>
              <div>
                <Btn>2개의 답변</Btn>
              </div>

           </Container>
        </>
    )

}

export default Card;