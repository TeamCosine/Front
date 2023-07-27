import React from "react";
import styled from "styled-components";

const Container = styled.div`
   border-radius: 15px;
   border: 1px solid #C4C5C6;
   background: #FFF;
   box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
   width : 200px;
   height : 130px;
   padding: 30px 18px;
`;
const Bar = styled.div`
   margin-top: 5px;
   margin-bottom: 10px;
   background-color: #bdbdbd;
   height: 3px;
`;

const TeamTitle = styled.div`
   font-size: 23px;
   font-style: normal;
   font-weight: 600;
   line-height: normal;
`;
const TeamContent = styled.div`
   text-align: left;
   font-size: 17px;
   font-style: normal;
   font-weight: 400;
   line-height: normal;
   white-space: pre-line;
`;

const Card =() =>{
    const TeamPost = {
      0: '저: 백엔\n 벗: 프엔\n 자리 2명 남았습니다~'
    }

    return (
        <>
           <Container>
              <TeamTitle>이화 공모전</TeamTitle>
              <Bar/>
              <TeamContent>{TeamPost[0]}</TeamContent>
           </Container>
        </>
    )

}

export default Card;