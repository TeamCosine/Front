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
    width : 50vw;
   
`;
const Btn = styled.button`
   
`;
const Btn2 = styled.button``;


const Write =() =>{
    return (
        <>
        <Writecontainer>
        <Title>
          <Titleinput />
          <Btn2>익명 선택</Btn2>
          <Btn2>게시판 선택</Btn2>
          
        </Title>
          <Textinput />
          <Btn>완료</Btn>
        </Writecontainer>
        </>
    )
}

export default Write;