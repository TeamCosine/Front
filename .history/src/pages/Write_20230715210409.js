import React from "react";
import { Component } from "react";
import styled from 'styled-component';

const Titleinput = styled.textarea`
   overflow: hidden;
   width : 600px;
   min-height : 45px;
   background-color : white;
   color : #006fff;
   font-size: 43px;

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