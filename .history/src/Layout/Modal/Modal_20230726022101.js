import React from "react";
import styled from "styled-component";
import { useEffect, useRef } from "react";
const Container = styled.div`
`;
const Overlay=styled.div``;
const Modalwrap=styled.div``;
const Contents = styled.div``;
const Modal = ({children}) =>{
    const modalRef = useRef
    return (
        <Container>
            <Overlay>
               <Modalwrap ref={modalRef}>
                <Contents>{children}</Contents>

               </Modalwrap>
            </Overlay>
        </Container>
    )

}

export default Modal;