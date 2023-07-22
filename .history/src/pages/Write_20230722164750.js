import React from "react";
import styled from 'styled-components';
const WriteContainer=styled.div``;
const InputTitle = styled.input``;
const Btn2 = styled.button``;
const InputWrite = styled.textarea`
   width : 66vw;
   height : 60vh;
   flex-shrink: 0;
   padding-bottom: 1vh;
`;
const Btn = styled.button``;
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