import React from "react";
import styled from 'styled-components';

const Writecontainer= styled.div`
     width: 100vw;
     height: 100vh;
     
    
`;
const Title = styled.div``;
const Titleinput = styled.input`
   overflow: hidden;
   

`;
const Textinput = styled.textarea`
   
`;
료


const Write =() =>{
    return (
        <>
        <Writecontainer>
        <Title>
          <Titleinput />
          
        </Title>
          <Textinput />
          <Btn>완</Btn>
        </Writecontainer>
        </>
    )
}

export default Write;