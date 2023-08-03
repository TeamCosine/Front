import React from "react";
import styled from 'styled-components';


const Container = styled.div`
   border-radius: 15px;
   width : 95%;
   height : 8.5vh;
   background-color: white;
   color : black;
   font-weight: 800;
   font-size : 15px;
   text-align: center;
   align-items: center;
   display:flex;
   justify-content: center;
   margin-bottom: 1vh;
   margin-top: 1vh;
`;

const Card = () =>{

  
    return (
        <Container>
          <p>Eveloper 이용 규칙 확인</p>
        </Container>

    )


}

export default Card;