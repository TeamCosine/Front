import React from "react";
import styled from 'styled-components';
const WriteContainer=styled.div``;
const InputTitle = styled.input`
    margin-top : 13vh;
    margin-right: 2vw;
    width : 50vw;
    font-size: 40px;

`;
const Btn2 = styled.button`
    margin-right : 0.3vw;
    margin-left : 0.4vw;
`;
const InputWrite = styled.textarea`
   width : 66vw;
   height : 60vh;
   flex-shrink: 0;
   margin-bottom: 4vh;
   margin-top : 5vh;
   background-color: #f0f0f0;
   border-radius: 5px;

`;
const Btn = styled.button`
   width : 7vw;
   height : 3.5vh;
   border-radius: 20px;
   background-color: #3E8DF4;
   color : white;
   border : none;
   margin-bottom: 5vh;
   
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