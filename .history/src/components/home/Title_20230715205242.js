import React from "react";
import styled from 'styled-component';

const Container = styled.button`
  background-color: #E8F1FD;
`;

const Title = ({text}) =>{
    <>
      <Container>
          {text}
      </Container>
    </>

}

export default Title;