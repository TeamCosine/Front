import React from "react";
import styled from 'styled-components';

const Writecontainer= styled.div`
    
`;
const Titleinput = styled.input`
   overflow: hidden;
   

`;
const Textinput = styled.textarea`
   
`;

const Write =() =>{
    return (
        <>
        <Writecontainer>
          <Titleinput />
          <Textinput />
        </Writecontainer>
        </>
    )
}

export default Write;