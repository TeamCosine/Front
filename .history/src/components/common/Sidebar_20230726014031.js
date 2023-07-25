import React from "react";
import styled  from "styled-components";
import {Link} from 'react-router-dom';

const Container = styled.div`
 background: linear-gradient(0deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.00) 100%), rgba(62, 141, 244, 0.20);
 width : 200px;
 height: 100vh;

`;
const Title = styled.div`
    font-size: 30px;
    color : #FFFFFF;
    font-weight: 800;
    text-align: center;
    height: 70px;
    background-color: #3E8DF4;
    margin : 0 auto;
    padding-top : 35px;
`;
const Menu =styled.div`
   font-size: 25px;
   font-weight: 600;
   color:black;
   
   

`;

const Home = styled.div`
   font-size: 30px;
   font-weight: 700;
   color : black;
   margin-bottom :30px;
    
`;

const Sidebar =() =>{
    return (
        <Container>
            <Link to ="/home">
                <Title>Eveleoper</Title>
            </Link>
            <Link to ="/home">
                <Home>Home</Home>
            </Link>
            <Link to ="/qna">
                <Menu>❓  QNA</Menu>
            </Link>
        </Container>
    )
}

export default Sidebar;