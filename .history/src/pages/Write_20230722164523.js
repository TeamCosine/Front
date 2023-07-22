import React from "react";
import styled from 'styled-components';
const WriteContainer=styled.div``;
const InputTitle = styled.input``;
const Btn2 = styled.button``;
const InputWrite = styled.textarea``;
const Write =() =>{

    return (
        <>
           <WriteContainer>
            <div>
                <InputTitle/>
                <Btn2></Btn2>
                <Btn2></Btn2>
            </div>
            <InputWrite />

           </WriteContainer>
        </>
    )

}

export default Write;