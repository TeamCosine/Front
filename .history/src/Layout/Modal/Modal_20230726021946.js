import React from "react";
import styled from "styled-component";

const Container = styled.div`
`;
const Overlay=styled.div``;
const Modalwrap=styled.div``;
const 
const Modal = () =>{
    return (
        <Container>
            <Overlay>
               <Modalwrap>
                <Contents>{children}</Contents>

               </Modalwrap>
            </Overlay>
        </Container>
    )

}

export default Modal;