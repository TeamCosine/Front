import React from "react";
import styled from 'styled-components';

const WriteContainer=styled.div``;
const InputTitle = styled.input`
    margin-top : 13vh;
    margin-right: 2vw;
    width : 44vw;
    font-size: 40px;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    color :#3E8DF4;
    font-weight: bold;

`;
const Btn2 = styled.button`
    margin-right : 0.3vw;
    margin-left : 0.4vw;
    width : 9vw;
    height : 4vh;
    flex-shrink: 0;
    text-align: center;
    font-weight: 500;
    background-color: #d8e8fd;
    border-radius: 5px;
    border : none;


`;
const InputWrite = styled.textarea`
   width : 66vw;
   height : 60vh;
   flex-shrink: 0;
   margin-bottom: 4vh;
   margin-top : 5vh;
   background-color: #f0f0f0;
   border-radius: 5px;
   flex-shrink: 0;
   border:none;

`;
const Btn = styled.button`
   width : 7vw;
   height : 3.5vh;
   border-radius: 20px;
   background-color: #3E8DF4;
   color : white;
   border : none;
   margin-bottom: 5vh;
   font
   
`;
const Write =() =>{

    return (
        <>
           <WriteContainer>
            <div>
                <InputTitle/>
                <Btn2>익명 선택</Btn2>
                <Btn2>게시판 선택</Btn2>
            </div>
            <InputWrite />
            <div>
                <Btn>완료</Btn>
            </div>

           </WriteContainer>
        </>
    )

}

export default Write;