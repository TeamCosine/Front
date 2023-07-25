import React from "react";
import styled from "styled-component";

const Container = styled.div`
`;
const Overlay=styled.div``;
const Modalwrap=styled.div``;
const Contents = styled.div``;
const Modal = ({children}) =>{
    
    return (
        <Container>
            <Overlay>
               <Modalwrap ref=>
                <Contents>{children}</Contents>

               </Modalwrap>
            </Overlay>
        </Container>
    )

}

export default Modal;