import React from "react";
import styled from 'styled-components';

const Titleinput = styled.input`
   overflow: hidden;
   

`;
const Textinput = styled.textarea`
   width : 60%;
   min-height : 60%;
`;

const Write =() =>{
    return (
        <>
          <Titleinput />
          <Textinput />

        </>
    )
}

export default Write;