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
   margin-bottom: 5vh;
   margin-top : 5vh;

`;
const Btn = styled.button`
   width : 10vw;
   height : 3vh;
   border-radius: 20px;
   background-color: #3E;
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