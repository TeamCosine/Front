import React from "react";
import styled  from "styled-components";
import {Link} from 'react-router-dom';

const Container = styled.div`
 background-color: aliceblue;
`;
const Title = styled.div``;

const Sidebar =() =>{
    return (
        <Container>
            <Link to ="/home">
                <Title>Eveleoper</Title>
            </Link>
            <Link to ="/qna">

            </Link>
        </Container>
    )
}

export default Sidebar;