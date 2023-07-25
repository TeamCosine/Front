import React from "react";
import styled  from "styled-components";
import {Link} from 'react-router-dom';

const Container = styled.div`
 background: linear-gradient(0deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.00) 100%), rgba(62, 141, 244, 0.20);
 width : 25vw;

`;
const Title = styled.div``;
const Menu =styled.div`
   font-size: ;
`;

const Sidebar =() =>{
    return (
        <Container>
            <Link to ="/home">
                <Title>Eveleoper</Title>
            </Link>
            <Link to ="/qna">
                <Menu>❓  QNA</Menu>
            </Link>
        </Container>
    )
}

export default Sidebar;