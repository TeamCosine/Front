import React from "react";
import styled  from "styled-components";
import {Link} from 'react-router-dom';

const Container = styled.div`
 background-color: aliceblue;
`;

const Sidebar =() =>{
    <Container>
        <Link to="/home">Eveleoper</Link>
        
    </Container>
}

export default Sidebar;